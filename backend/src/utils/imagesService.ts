import AWS from 'aws-sdk';


const s3 = new AWS.S3({
  accessKeyId: process.env.YOUR_ACCESS_KEY_ID as string ,
  secretAccessKey: process.env.YOUR_SECRET_ACCESS_KEY as string,
  region: process.env.YOUR_REGION  as string 
});

const getAudioContentType = (extension: string): string => {
    switch (extension.toLowerCase()) {
      case 'mp3':
        return 'audio/mpeg';
      case 'wav':
        return 'audio/wav';
      case 'ogg':
        return 'audio/ogg';
      default:
        return 'application/octet-stream';
    }
  };

  const convertBase64ToBuffer = (base64: string): Buffer => {
    const base64Data = base64.replace(/^data:audio\/\w+;base64,/, ''); 
    return Buffer.from(base64Data, 'base64'); 
  };
  
  
   const uploadAudioToS3 = async (
    audioBase64: string,
    fileName: string
  ): Promise<string> => {
    const base64Data = audioBase64.replace(/^data:audio\/\w+;base64,/, ''); // Strip metadata
    const buffer = Buffer.from(base64Data, 'base64'); // Convert to buffer
  
    const params = {
      Bucket: 'doctime3',
      Key: fileName,
      Body: buffer,
      ContentType: 'audio/mpeg', // Change based on the audio type
    };
  console.log(params,"jjjj");
  
    return new Promise((resolve, reject) => {
      s3.upload(params, (err:any, data:any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location); // Return the file URL
        }
      });
    });
  };




//=================//====================//====================//====================//=====================//===================//
//=================//====================//====================//====================//=====================//===================//
//=================//====================//====================//====================//=====================//===================//




import cloudinary from './cloudinaryConfig';
import { UploadApiResponse } from 'cloudinary';

const uploadImage = async (base64Image: string): Promise<string> => {
  try {
    const result: UploadApiResponse = await cloudinary.uploader.upload(base64Image, {
      folder: 'images',
      resource_type: 'image'  // Explicitly specify resource type as image
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

export default uploadImage;


export { uploadImage,uploadAudioToS3};
