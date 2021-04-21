const ownerNumber = ["+34671350075@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '+34671350075' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Se bienvenido ${numero}\n\nEscribe ${prefix}menú para ver la lista de comandos`
}
//Welcome activado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nAo menu do Brizas-bot`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'api key do imgbb, crie sua conta e pegue a key'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '𝐁𝐑𝐈𝐙𝐀𝐒 𝐁𝐎𝐓\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Tu número está bloqueado😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando está bloqueado🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Serás eliminado por enviar contenido prohibido*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Por ser admin no te eliminaré*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Lástima, el antiporno está activado'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu eres admin, te perdonaré el enviar porno*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corre!! Tu expulsión está cerca'
// mensagem de ban no antilink

const adminmsglink = 'Eso es un enlace amigo... menos mal que eres admin 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Esa palabra está prohibida'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Adiós! aprende educación!'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Buen día para todos! 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Buena tarde! Que aproveche el café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Error, inténtalo de nuevo :/'
// mensagem de erro

const notregister = `*Comando no registrado, escriba ${prefix}menu para ver la lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Te ves como un cangrejo, un cangrejo triturado 😡'
const cadebot = 'Me has llamado 👉👈?'
const botfdp = 'Vete a la mierda chico, que te pateen el culo cuando estés dormido'
const botgostoso = 'Gracias 😳👉👈'
const botfofo = 'Gracias 😳👉👈'
const botbaianor = 'Invité a tu placa madre a mi red, tu cornudo'
const botcorno = 'Vete a la mierda, jugador ff, comprador de paquete de pies'
const botputa = 'Señora tu madre 😡'
const botgay = 'Dijo que el hombre rueda😡'
const botviado = 'Dijo que el hombre rueda 😡'
const numbotfeio = 'Señora tu madre 😡'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Espera un poco... ⌛',
    success: '✔️ Hecho! ✔️',
    error: {
        stick: '❌ Hubo un error ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando sólo puede ser usado en grupos! ❌',
        ownerG: '❌ Este comando sólo puede ser usado por el propietario del grupo! ❌',
        ownerB: '❌ Este comando sólo puede ser usado por el número propietario! ❌',
        admin: '❌ SILENCIO USUARIO, NO TIENES PODER PARA USAR EL COMANDO ❌',
        Badmin: '❌ Recuerda hacerme administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=671350075:+34 671 35 00 75\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
