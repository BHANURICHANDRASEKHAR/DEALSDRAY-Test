import express from 'express';
import multer from 'multer';
import admin from 'firebase-admin';

const router = express.Router();

// Set up multer storage and file handling
const storage = multer.memoryStorage(); // Store files in memory before uploading to Firebase
const upload = multer({ storage: storage }); // Use memory storage

router.post('/', upload.single('file'), async (req, res) => {
  try {
    // Check if a file is provided
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const file = req.file;
    const bucket = admin.storage().bucket();
    const filename = `contributes/${Date.now()}-${file.originalname}`; // Create a unique filename

    const fileUpload = bucket.file(filename);

    // Create a download URL that expires in 2025
    const downloadURL = await fileUpload.getSignedUrl({
      action: 'read',
      expires: '03-01-2025',
    });

    // Upload file to Firebase storage
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on('error', (err) => {
      console.error('File upload error:', err);
      return res.status(500).send({ status: false, msg: 'File upload error.' });
    });

    stream.on('finish', () => {
      res.status(200).send({ status: true, msg: 'File uploaded successfully.', img: downloadURL });
    });

    // End the file stream with the file buffer from multer
    stream.end(file.buffer);
  } catch (error) {
    console.error('Error in uploading file:', error);
    res.status(500).send({ status: false, msg: 'Internal server error.' });
  }
});

export default router;
