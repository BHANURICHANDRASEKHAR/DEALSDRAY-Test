import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const firebase = () => {
  const i = {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: "ecb692bbfdf97b768bc51771db22fb94d6d88e81",
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),  // Handle line breaks in private key
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: "112162888285170878663",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`
  };

  admin.initializeApp({
    credential: admin.credential.cert(i),
    storageBucket: 'gs://react-647c1.appspot.com/',
  });

  console.log("Firebase Connected");
}

export default firebase;
