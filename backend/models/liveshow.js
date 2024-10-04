import mongoose from 'mongoose';

const Liveshow = new mongoose.Schema({
  youtubeUrl: { type: String, default: "https://www.youtube.com/embed/Ef4e9QGhonY?si=_XB_4WooS5iJWnjQ" },
  venue: String,
  start: String,  
  date: String,  
  info: String, 
  place: String,
});

export default mongoose.model('Liveshow', Liveshow);