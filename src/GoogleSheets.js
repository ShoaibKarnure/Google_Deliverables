// import React, { useEffect } from "react";
// const fs = require("fs").promises;
// const path = require("path");
// const process = require("process");
// const { authenticate } = require("@google-cloud/local-auth");
// const { google } = require("googleapis");
// const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
// const TOKEN_PATH = path.join(process.cwd(), "token.json");
// const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

// async function loadSavedCredentialsIfExist() {
//   try {
//     const content = await fs.readFile(TOKEN_PATH);
//     const credentials = JSON.parse(content);
//     return google.auth.fromJSON(credentials);
//   } catch (err) {
//     return null;
//   }
// }

// async function saveCredentials(client) {
//   const content = await fs.readFile(CREDENTIALS_PATH);
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: "authorized_user",
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token,
//   });
//   await fs.writeFile(TOKEN_PATH, payload);
// }

// async function authorize() {
//   let client = await loadSavedCredentialsIfExist();
//   if (client) {
//     return client;
//   }
//   client = await authenticate({
//     scopes: SCOPES,
//     keyfilePath: CREDENTIALS_PATH,
//   });
//   if (client.credentials) {
//     await saveCredentials(client);
//   }
//   return client;
// }

// async function listMajors(auth) {
//   const sheets = google.sheets({ version: "v4", auth });
//   const res = await sheets.spreadsheets.values.get({
//     spreadsheetId: "1bbhbRxOG1nnkzjif7vxwWp-2uV1fHClOApPJ0vLofQs",
//     range: "Final_sheet",
//   });
//   const rows = res.data.values;
//   console.log(rows[0]);
//   if (!rows || rows.length === 0) {
//     console.log("No data found.");
//     return;
//   } else {
//     console.log("Data found");
//   }
// }

// const GoogleSheetsComponent = () => {
//   useEffect(() => {
//     authorize().then(listMajors).catch(console.error);
//   }, []);

//   return <div>Google Sheets Component</div>;
// };

// export default GoogleSheetsComponent;
