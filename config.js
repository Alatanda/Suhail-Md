const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : 2348081388857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_55_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNixcbiAgICAgICAgMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDczLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICA5MixcbiAgICAgICAgMTkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTd3ppSTZid0RGc3ZvbnM0S2xDdytrZllhL3VVb2wzeEp1WENzNHZTdzI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0SkUzUDU0LVJMbXdEV29lYnVxUTFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzMmY4MjQ5LWIxYjItNGJjZS1hYzA1LWY1MjQ1MjY3YzcwZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICA2MyxcbiAgICAgIDkxLFxuICAgICAgMTkzLFxuICAgICAgMTE5LFxuICAgICAgMTY0LFxuICAgICAgMjI4LFxuICAgICAgMTQ1LFxuICAgICAgMzUsXG4gICAgICAxNDAsXG4gICAgICAzNixcbiAgICAgIDQsXG4gICAgICAyMzUsXG4gICAgICA4MixcbiAgICAgIDE5MyxcbiAgICAgIDIzMSxcbiAgICAgIDg3LFxuICAgICAgNTcsXG4gICAgICAxNTIsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAyMTMsXG4gICAgICA1LFxuICAgICAgNzQsXG4gICAgICAyMjUsXG4gICAgICA0OCxcbiAgICAgIDE3MSxcbiAgICAgIDEzOSxcbiAgICAgIDk0LFxuICAgICAgMjA4LFxuICAgICAgMTIwLFxuICAgICAgMjA1LFxuICAgICAgNDAsXG4gICAgICAxMTksXG4gICAgICAxMzksXG4gICAgICAxODUsXG4gICAgICAzNixcbiAgICAgIDEyMixcbiAgICAgIDE2NyxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXWVNSUDlMU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTM4ODg1Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWxhdGFuZGEgR2xvYmFsIFRlY2hcIixcbiAgICBcImxpZFwiOiBcIjgyMTkyODg5ODM5NjYxOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlBUcy9FTEVOS2Z2N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoMWZMeUpFUXBRRld4SDkyZW10dUZHUHRVQ2RUbk5BOXhNZTNCdVVTZXlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlE3djl5WG40ZWxTOUZWait1NTcrOUJSUjdMakhJZ20xb3ZOc1phbHRUS1dxSWlRZVJKTzFqZC8xQ3FDUTJwb2FnZzRSWDQvTFFiRU50WUs1RkxFOWpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkt1VkRtblpGZTBRMnFFZEdOQUtOMUdZVEtSd1Q0R2owZzFBTUlKdncxcjQrdDdldC9kelpIWFNNbC9qQjlvdVd6S1ZpV0lna1IxZW0wWjVqdG1taWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODEzODg4NTc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODYwMzczM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
