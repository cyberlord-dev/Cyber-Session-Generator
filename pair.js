const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Cyber_Lord,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function CYBER_LORD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Cyber_Lord = Malvin_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Cyber_Lord.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Cyber_Lord.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Cyber_Lord.ev.on('creds.update', saveCreds)
            Pair_Code_By_Cyber_Lord.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Cyber_Lord.sendMessage(Pair_Code_By_Cyber_Lord.user.id, { text: '' + b64data });

               let CYBER_LORD_TEXT = `
┏━━━━━━━━━━━━━━
┃༒𝐂𝐘𝐁𝐄𝐑 LØRD༒  SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = ༒𝐂𝐘𝐁𝐄𝐑 LØRD༒ 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || https://whatsapp.com/channel/0029Vb4pakq47Xe8cU8o5e2q
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/2348107574599
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/cyberlord-dev/
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = https://www.youtube.com/@Cyberdev2
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 ༒𝐂𝐘𝐁𝐄𝐑 LØRD༒ _`
 await Pair_Code_By_Cyber_Lord.sendMessage(Pair_Code_By_Malvin_King.user.id,{text:MALVIN_KING_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Cyber_Lord.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    CYBER_LORD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await CYBER_LORD_PAIR_CODE()
});
module.exports = router
