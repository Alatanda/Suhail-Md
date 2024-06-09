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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_56_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWHlmWjF0dVcvY004NEs1dWRwdnlIdkRGUktVMHA1cnozOHRZWVJ5UFhLYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTkhXbWtIa3FTTXVjTXRHdUdlUE9VQVwiLFxuICBcInBob25lSWRcIjogXCI1ZTA2Zjc5Yi1lYmZmLTQxMDEtOGY3MC01ZDBlYjNjMmM5ZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgODcsXG4gICAgICAxMTksXG4gICAgICAxODAsXG4gICAgICAxMjgsXG4gICAgICAyMTAsXG4gICAgICAxMTMsXG4gICAgICAyMDQsXG4gICAgICAyNDgsXG4gICAgICA5MyxcbiAgICAgIDI0MixcbiAgICAgIDIxNyxcbiAgICAgIDExNyxcbiAgICAgIDIyLFxuICAgICAgMjQwLFxuICAgICAgMjIyLFxuICAgICAgMTEzLFxuICAgICAgMjIzLFxuICAgICAgMjExLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICA3OCxcbiAgICAgIDUwLFxuICAgICAgMTYyLFxuICAgICAgODcsXG4gICAgICAxNDcsXG4gICAgICA4OSxcbiAgICAgIDEzMyxcbiAgICAgIDIzNSxcbiAgICAgIDYxLFxuICAgICAgOTgsXG4gICAgICAxMDIsXG4gICAgICAxMDYsXG4gICAgICA4OCxcbiAgICAgIDEzMCxcbiAgICAgIDU4LFxuICAgICAgMTEsXG4gICAgICAxNSxcbiAgICAgIDE1NyxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3TUhDQzZWVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTM4ODg1NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWxhdGFuZGEgR2xvYmFsIFRlY2hcIixcbiAgICBcImxpZFwiOiBcIjgyMTkyODg5ODM5NjYxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxkNUlJQkVMRGZrN01HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoMWZMeUpFUXBRRld4SDkyZW10dUZHUHRVQ2RUbk5BOXhNZTNCdVVTZXlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImovSFFmWDdOZHRLWTROcE9HQzFxQzJWdzB2K0xnRmRwbnFFS1ozUUoxMkRRNGRqcnQxamZXa1JDWVdoMFlrUXNTR2gyalo2ejlEU1M5Tmg4T2tOSmh3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInAyRFlTYVRZV05ReWNkK0s2K3RSS1dwQXg3cysydnQ3eGJ3UUFUZC8yeUx4OWZDaWdiVmQySkF4RnBoWHJRNk5DNWVUOG5HdEwyTWk0Slk4d3Ixc0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODEzODg4NTc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzg5MDk5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtXZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1dnLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVFkN0NXZFI4cGZqNmhJbVV4WlhlZDFGZGJDU204U091citodnBBbkQ2QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzQyODAwNjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzg5MDc2OTg1OFwifSIKfQ=="  // PUT your SESSION_ID 


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
