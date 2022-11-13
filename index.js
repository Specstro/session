const { default: specstorConnect, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
/*const gradient = require('gradient-string')*/
/*let setting = JSON.parse(fs.readFileSync('./src/setting.json'))*/
/*let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))*/
const { state, saveState } = useSingleFileAuthState(`./session.json`)
const pino = require('pino')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function start() {
    const sock = specstorConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Specstor','Safari','1.0.0'],
        auth: state,
        version: [2, 2204, 13]
    })
   /* console.log(gradient('gray', 'black')(`
 ██▀███ ▓██   ██▓ ▄▄▄       ███▄    █ 
▓██ ▒ ██▒▒██  ██▒▒████▄     ██ ▀█   █ 
▓██ ░▄█ ▒ ▒██ ██░▒██  ▀█▄  ▓██  ▀█ ██▒
▒██▀▀█▄   ░ ▐██▓░░██▄▄▄▄██ ▓██▒  ▐▌██▒
░██▓ ▒██▒ ░ ██▒▓░ ▓█   ▓██▒▒██░   ▓██░
░ ▒▓ ░▒▓░  ██▒▒▒  ▒▒   ▓▒█░░ ▒░   ▒ ▒ 
  ░▒ ░ ▒░▓██ ░▒░   ▒   ▒▒ ░░ ░░   ░ ▒░
  ░░   ░ ▒ ▒ ░░    ░   ▒      ░   ░ ░ 
   ░     ░ ░           ░  ░         ░ 
         ░ ░                           
    `))

console.log(gradient('gray', 'gray')('@Specstor'))*/
console.log('startingggggg ')
console.log('\n')
    store.bind(sock.ev)
    
    sock.ev.on('creds.update', saveState)
}
start()