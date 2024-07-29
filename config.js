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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_02_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmZXTjN3OEh6amltUmRldjBqVk9HR3dqWHRDT2lwWmREV2YzVVFkWHVDWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVUhtcHZhVzZRcFNaMVh5S2RTcHFzZ1wiLFxuICBcInBob25lSWRcIjogXCIyOGFmNTdjMC05M2ZiLTRiZmUtYTVkYi02MzlmMjgyMTIzN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICA1MCxcbiAgICAgIDE2NyxcbiAgICAgIDg1LFxuICAgICAgNTYsXG4gICAgICA5LFxuICAgICAgMjcsXG4gICAgICA1NSxcbiAgICAgIDIxNSxcbiAgICAgIDExOSxcbiAgICAgIDE2OCxcbiAgICAgIDE3LFxuICAgICAgMzksXG4gICAgICAxMDgsXG4gICAgICAxNTIsXG4gICAgICAxMDQsXG4gICAgICAxNTcsXG4gICAgICAxNCxcbiAgICAgIDE3NixcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICA1LFxuICAgICAgMTg0LFxuICAgICAgMTIzLFxuICAgICAgMTc5LFxuICAgICAgNDUsXG4gICAgICAxOTUsXG4gICAgICA0NCxcbiAgICAgIDI1NCxcbiAgICAgIDkxLFxuICAgICAgMjEyLFxuICAgICAgMTA0LFxuICAgICAgODIsXG4gICAgICAyMjcsXG4gICAgICA1OSxcbiAgICAgIDcxLFxuICAgICAgMTc0LFxuICAgICAgMTI2LFxuICAgICAgMTQ4LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBZQlo3SjhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgxMzg4ODU3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbGF0YW5kYSBHbG9iYWwgVGVjaFwiLFxuICAgIFwibGlkXCI6IFwiODIxOTI4ODk4Mzk2NjE6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVFRzL0VMRU42Sm5yVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImgxZkx5SkVRcFFGV3hIOTJlbXR1RkdQdFVDZFRuTkE5eE1lM0J1VVNleW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwielM4K045d0hPaDhLWVN1MTNBcThvM3dRa0hJNXNwejhrMWxxOVA5Sk1FMGtpenNDeFZXRHRZcFJseGtUeko0eFNpVnlDR2xUR014MnNyZWVPbG9aamc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwielRYTFdkTWxGcFFJZk9kblRWMFRGN0piTmZ4dGlVZWRMZVJ1Tk9tR1NhbTNoQmo2UC8rTlNZZHpPVVVtcGNmK2ExamFsN1Q4VlNlWG43RTV5MlJDQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MTM4ODg1Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjU0NTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0lGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYcG5DcGtNK1dtSFp6WUFhYjFMK01KWHJoSFUxWTlybkRTRUZKOVR3dGFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxOTA2MTQ0ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI0MDg2MjE0MlwifSIKfQ=="  // PUT your SESSION_ID 


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
