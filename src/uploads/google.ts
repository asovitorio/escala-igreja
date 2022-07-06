import fs from "fs";
import { google } from "googleapis";
import path from "path";

interface FileType {
  fieldname: string | undefined;
  originalname: string | undefined;
  encoding: string | undefined;
  mimetype: string | undefined;
  destination: string | undefined;
  filename: string | undefined;
  path: string | undefined;
  size: number | undefined;
}

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const filePath = path.join("src", "uploads", "img");

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

export async function uploadFile(file: FileType) {
  try {
    const {data} = await drive.files.create({
      requestBody: {
        name: file.filename,
        mimeType: file.mimetype,
        parents: [String(process.env.GOOGLE_API_FOLDER_ID)],
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(`${filePath}/${file.filename}`),
      },
    });
  
    if (!data) throw new Error("Erro upload in driver!");

    fs.unlink(`${filePath}/${file.filename}`, (err) => {
      if (err) throw err;
      console.log(`${filePath} was deleted`);
    });

    console.log("image saved in google drive id: ", data.id);
    return data.id;
  } catch (error) {
    if (error instanceof Error) console.log(error);
  }
}

export async function deleteFileGoogle(fileId: string) {
  try {
    const response = await drive.files.delete({
      fileId: fileId,
    });
    console.log(response.data, response.status);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function generatePublicUrl(fileId: string) {
  try {
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
    const result = await drive.files.get({
      fileId,
      fields: "webViewLink,webContentLink",
    });
    console.log(result.data);
    return result.data.webContentLink;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
