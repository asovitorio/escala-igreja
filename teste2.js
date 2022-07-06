const{google} = require('googleapis');

const CLIENT_ID = "431108832257-fe7ft1j3u19246obb7b48q8bsm2msunp.apps.googleusercontent.com";
const CLIENT_SECRET="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";
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = "1//04ihO1585jqx-CgYIARAAGAQSNwF-L9IrS6bnmkSqPZa3FUCBTFDWg0L8gLWbzyTMeP1gjykLMKWMfZcM1groL0PvznkrEPA1RM8";

const oauth2Client = new google.oauth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oauth2Client.se