import mongoose from 'mongoose';

const PlaylistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  photoUrl: String,  // Store Cloudinary URL for the photo
  musicUrl: String,  // Store Cloudinary URL for the music
});

export default mongoose.model('Playlist', PlaylistSchema);
