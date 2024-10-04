import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

import dotenv from 'dotenv';
dotenv.config();  


   // Configuration
   cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath) {
            return null;
        }

        //upload the file on cloudinary
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })

        console.log("File has been uploaded on cloudinary Successfully !",response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)  //remove the localy stored file as the uploader got failed
        console.error('Cloudinary upload failed:', error);
        return null;
    }
}



// Function to delete a file from Cloudinary
export const deleteFromCloudinary = async (publicId, resourceType = 'image') => {
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
  } catch (error) {
    console.error('Cloudinary deletion error:', error);
    throw new Error('Failed to delete from Cloudinary');
  }
};




export {uploadOnCloudinary}