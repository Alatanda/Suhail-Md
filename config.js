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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348081388857";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_36_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICA1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmdVhpYlJaUFRCd3U5SGxZcndSbjFBZHhGa05Ud1lTQjBxQ05nUFhoU2lNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4YUJHQjlTa1RjZTRUem5McGN6QU1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBhMjQzODc4LWI1ODItNGQzNi04OWY2LTlhMTIyZDRjYjliNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAyMTksXG4gICAgICAxMDMsXG4gICAgICA4LFxuICAgICAgMTc3LFxuICAgICAgMzksXG4gICAgICA2MyxcbiAgICAgIDEwOCxcbiAgICAgIDU0LFxuICAgICAgMTI3LFxuICAgICAgNzEsXG4gICAgICAyMzAsXG4gICAgICA0NyxcbiAgICAgIDI0NyxcbiAgICAgIDEzMSxcbiAgICAgIDEyMSxcbiAgICAgIDIyMCxcbiAgICAgIDI0NixcbiAgICAgIDE5MSxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDEyNyxcbiAgICAgIDE4NyxcbiAgICAgIDEyOSxcbiAgICAgIDQ5LFxuICAgICAgMTQsXG4gICAgICAxODMsXG4gICAgICAxMDgsXG4gICAgICAxODAsXG4gICAgICAyMzIsXG4gICAgICAyNDAsXG4gICAgICA5NixcbiAgICAgIDMxLFxuICAgICAgMTIzLFxuICAgICAgMTkzLFxuICAgICAgMjI4LFxuICAgICAgOTYsXG4gICAgICAxNjAsXG4gICAgICA1NSxcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYRDlHTFk2TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTM4ODg1NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWxhdGFuZGEgR2xvYmFsIFRlY2hcIixcbiAgICBcImxpZFwiOiBcIjgyMTkyODg5ODM5NjYxOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXJkNUlJQkVJQ0Zyck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoMWZMeUpFUXBRRld4SDkyZW10dUZHUHRVQ2RUbk5BOXhNZTNCdVVTZXlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBmektic2Nlcm5GbU9qclBjQURUdHZxTXBUOWtqYVo0YTBWL1ByTzU1U2ZPVEdCd2ZXd2c5Z1lwT2pYbzY5d0NQWUlYNkw1UjN2bHVZVVFhc2dxamhRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9nQWtPb01FSkVZSXdVcGM1L0xybElYdmFMZFQ5VU1WTVdQeUhxS29tT0xwRXdnb3BhYmFseU9EMkJOUUs4bjU4RjM4TTRxRGdDeitVOTdXZ1dqRWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODEzODg4NTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODMyMTc5NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
