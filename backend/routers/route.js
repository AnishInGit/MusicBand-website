import express from 'express';
import { uploadOnCloudinary,deleteFromCloudinary } from '../utils/cloudinary.js';
import upload from '../middleware/multer.js'; // Multer middleware
import fs from 'fs';
import Playlist from '../models/playlist.js'; // MongoDB model
import Liveshow from '../models/liveshow.js';
import Contact from '../models/contactdetails.js'

const router = express.Router();


// Route to upload files
router.post('/upload', upload.fields([{ name: 'photo' }, { name: 'music' }]), async (req, res) => {
  try {
    const { title, artist } = req.body;
    
    // Check if files exist
    if (!req.files || !req.files['photo'] || !req.files['music']) {
      return res.status(400).send('Photo and music files are required');
    }

    // Local file paths
    const photoPath = req.files['photo'][0].path;
    const musicPath = req.files['music'][0].path;

    // Upload photo and music to Cloudinary
    const photoResponse = await uploadOnCloudinary(photoPath);
    const musicResponse = await uploadOnCloudinary(musicPath);

    // Delete local files
    fs.unlinkSync(photoPath);
    fs.unlinkSync(musicPath);

    if (!photoResponse || !musicResponse) {
      return res.status(500).send('File upload to Cloudinary failed');
    }

    // Save Cloudinary URLs in the database
    const playlist = new Playlist({
      title,
      artist,
      photoUrl: photoResponse.url, // Store Cloudinary URL for the photo
      musicUrl: musicResponse.url, // Store Cloudinary URL for the music
    });

    await playlist.save();
    res.status(200).send('Playlist uploaded successfully!');
  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).send('Upload failed');
  }
});


//get all uploaded playlistsongs
router.get('/allplaylistsong', async(req, res)=>{
      try {
        const playlistsongs= await Playlist.find({});
        return res.status(200).json(playlistsongs);
      } catch (error) {
        console.log(error);
        return res.status(506).send({message:error.message});
      }
})



router.delete('/deleteplaylist/:id', async (req, res) => {
  try {
    // Find the song in the database
    const playlist = await Playlist.findById(req.params.id);
    if (!playlist) {
      return res.status(404).send('Song not found');
    }

    // Extract the Cloudinary public_ids from the URLs
    const photoPublicId = playlist.photoUrl.split('/').pop().split('.')[0]; // Extract public_id from photoUrl
    const musicPublicId = playlist.musicUrl.split('/').pop().split('.')[0]; // Extract public_id from musicUrl

    // Delete the photo and music from Cloudinary
    await deleteFromCloudinary(photoPublicId, 'image'); // Deleting photo (image type)
    await deleteFromCloudinary(musicPublicId, 'video');   // Deleting music ( video type)

    // Delete the song from the database
    await Playlist.findByIdAndDelete(req.params.id);

    res.status(200).send('Song deleted successfully');
  } catch (error) {
    console.error('Error during deletion:', error);
    res.status(500).send('Deletion failed');
  }
});





// update liveshow elements
router.put("/updateliveshow/:id", async (req, res) => {
  const { youtubeUrl, venue, start,date,info,place } = req.body;
  try {
    const newLiveshow = {};
    if (youtubeUrl) {
      newLiveshow.youtubeUrl = youtubeUrl;
    }
    if (venue) {
      newLiveshow.venue = venue;
    }
    if (start) {
      newLiveshow.start = start;
    }
    if (date) {
      newLiveshow.date = date;
    }
    if (info) {
      newLiveshow.info = info;
    }
    if (place) {
      newLiveshow.place = place;
    }

    let liveshow = await Liveshow.findById(req.params.id);
    if (!liveshow) {
      return res.status(404).send("Not found");
    }
   

    liveshow = await Liveshow.findByIdAndUpdate(
      req.params.id,
      { $set: newLiveshow },
      { new: true }
    );
    res.json({ liveshow });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
});


// Fetch live show data
router.get('/liveshow/:id', async (req, res) => {
  const liveShowId = req.params.id; // Get the id from the URL

  try {
    const liveShowData = await Liveshow.findById(liveShowId); // Fetch live show by ID
    if (!liveShowData) {
      return res.status(404).json({ message: 'Live show not found' });
    }
    return res.status(200).json(liveShowData);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
});
 

router.post('/api/contact', async (req, res) => {
  const { name, phone, packagename, message } = req.body;
  console.log('Received Data:', req.body);  // Log the incoming data for debugging

  try {
    const newContact = new Contact({ name, phone, packagename, message });
    await newContact.save(); // Save to MongoDB
    res.status(200).json({ message: 'Data stored successfully!' });
  } catch (error) {
    console.error('Error storing contact:', error);  // Log the actual error
    res.status(500).json({ error: 'Failed to store data' });
  }
});

// Route to fetch all contact details
router.get('/api/contactdetails', async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);  // Log the actual error
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


export default router;

