import multiparty from 'multiparty';
import mime from 'mime-types';
import { google } from 'googleapis';
import fs from 'fs';

export default async function handle(req, res) {
  const links = [];
  const idImages = [];
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.SECRET_ID;
  const redirectUri = process.env.REDIRECTION_URI;
  const refreshToken = process.env.REFRESH_TOKEN;

  const oauth2client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );

  oauth2client.setCredentials({
    refresh_token: refreshToken,
  });

  const drive = google.drive({
    version: 'v3',
    auth: oauth2client,
  });

  async function uploadImages(fileName, filePath, type) {
    let idImage;
    try {
      const response = await drive.files.create({
        requestBody: {
          name: fileName,
          mimeType: type, // Corrected 'mineType' to 'mimeType'
        },
        media: {
          mimeType: type, // Corrected 'mineType' to 'mimeType'
          body: fs.createReadStream(filePath),
        },
      });
      idImage = response.data.id;
      idImages.push(idImage);
      await drive.permissions.create({
        fileId: idImage,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

      const result = await drive.files.get({
        fileId: idImage,
        fields: 'webViewLink, webContentLink',
      });
      const link = result.data.webViewLink;
      links.push(link);
    } catch (error) {
      return console.error(error.message); // Corrected to use 'console.error'
    }
  }

  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  // Create an array of promises for the uploadImages calls
  const uploadPromises = files.file.map(async (file) => {
    let ext = file.originalFilename.split('.').pop();
    let newFilename = Date.now() + '.' + ext;
    let path = file.path;
    let contentType = mime.lookup(path);

    return uploadImages(newFilename, path, contentType);
  });

  // Wait for all upload promises to resolve
  await Promise.all(uploadPromises);

  return res.json({ links, idImages });
}

export const config = {
  api: { bodyParser: false },
};
