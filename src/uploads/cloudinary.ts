import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
    cloud_name:process.env.API_KEY,
    api_key:process.env.API_SECRET,
    api_secret: process.env.CLOUD_NAME,
  });

  export {cloudinary}

  


