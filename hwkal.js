
const fs = require('fs')
const chalk = require('chalk')


//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/HwModsWa857'
global.ig = 'https://www.instagram.com/hikal_857/?hl=id'
global.mygc = 'wa.me/6287841959988'
global.myweb = 'https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'
global.linkgrupss = "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'Adiganzofc@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '☠️𝐀𝐃𝐈 𝐃𝐄𝐕'𝐒~𝐎𝐅𝐂🔥🇮🇩' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '🇮🇩𝐀𝐝𝐢𝐆𝐚𝐧𝐳-𝐎𝐟𝐜☠' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '𝐀𝐦𝐩𝐮𝐧 𝐒𝐮𝐡𝐮' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6281344950407']
global.packname = '☠️𝐂𝐘𝐁𝐄𝐑 𝐖𝐇𝐈𝐓𝐄☠️'
global.ownerr = ['☠️𝐀𝐃𝐈 𝐃𝐄𝐕'𝐒~𝐎𝐅𝐂🔥🇮🇩']
global.author = '𝐒𝐢 𝐏𝐚𝐥𝐢𝐧𝐠🗿'
global.sessionName = './sessionye/haikal'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {    
    wait: '*Loading... Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
}
//=================================================//

//=================================================//

//=================================================//
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.visoka = fs.readFileSync("./baseikal/video/hikal.gif")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
global.menuimg = 'https://k.top4top.io/p_2388xws321.jpg'
global.ggikal = fs.readFileSync("./baseikal/video/haikal.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
