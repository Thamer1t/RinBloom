("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require(`./𝕷𝖆ყO𝖚𝖙`);
let { proto, getContentType } = require("@adiwajshing/baileys");
let chalk = require("chalk");
let fs = require("fs");
let { unlink } = require("fs").promises;
let axios = require("axios");
let moment = require("moment-timezone");
let { sizeFormatter } = require("human-readable");
let util = require("util");
let child_process = require("child_process");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
let unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);
let sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
exports.unixTimestampSeconds = unixTimestampSeconds;
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.generateMessageTag = (epoch) => {
  let tag = (0, exports.unixTimestampSeconds)().toString();
  if (epoch) tag += ".--" + epoch;
  return tag;
};

exports.processTime = (timestamp, now) => {
  return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

exports.getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.getBuffer = async (url, options) => {
  try {
    options ? options : {};
    let res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.fetchJson = async (url, options) => {
  try {
    options ? options : {};
    let res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 > 0 ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 + (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.clockString = function (seconds) {
  let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  let Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, s].map((v) => v.toString().padStart(2, 0)).join(":");
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.isUrl = (url) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
      "gi"
    )
  );
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.getTime = (format, date) => {
  if (date) {
    return moment(date).locale("id").format(format);
  } else {
    return moment.tz("Asia/Jakarta").locale("id").format(format);
  }
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.formatDate = (n, locale = "id") => {
  let d = new Date(n);
  return d.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.formatp = sizeFormatter({
  std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.jsonformat = (string) => {
  return JSON.stringify(string, null, 2);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.logic = (check, inp, out) => {
  if (inp.length !== out.length)
    throw new Error("Input and Output must have same length");
  for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.generateProfilePicture = async (buffer) => {
  let jimp = await jimp_1.read(buffer);
  let min = jimp.getWidth();
  let max = jimp.getHeight();
  let cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped
      .scaleToFit(720, 720)
      .getBufferAsync(jimp_1.MIME_JPEG),
  };
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  let k = 1024;
  let dm = decimals < 0 ? 0 : decimals;
  let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.getSizeMedia = (path) => {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        let length = parseInt(res.headers["content-length"]);
        let size = exports.bytesToSize(length, 3);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      let length = Buffer.byteLength(path);
      let size = exports.bytesToSize(length, 3);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("error gatau apah");
    }
  });
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.parseMention = (text = "") => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.whatsapp.net"
  );
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.GIFBufferToVideoBuffer = async (image) => {
  let filename = `${Math.random().toString(36)}`;
  await fs.writeFileSync(`./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${filename}.gif`, image);
  child_process.exec(
    `ffmpeg -i ./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${filename}.mp4`
  );
  var buffer5 = await fs.readFileSync(`./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${filename}.mp4`);
  Promise.all([
    unlink(`./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${filename}.mp4`),
    unlink(`./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${filename}.gif`),
  ]);
  return buffer5;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.smsg = async (ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, Ѷ𝖎𝖔𝖓) => {
  if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊) return Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
  let M = proto.WebMessageInfo;
  if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key) {
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.id = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id;
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBaileys =
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.id.startsWith("BAE5") && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.id.length === 16;
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.remoteJid;
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.fromMe;
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.endsWith("@g.us");
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender = ӄ𝖚𝖓𝖆𝖎.decodeJid(
      (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe && ӄ𝖚𝖓𝖆𝖎.user.id) ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participant ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.participant ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID ||
        ""
    );
    if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup)
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participant = ӄ𝖚𝖓𝖆𝖎.decodeJid(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.participant) || "";
  }
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message) {
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype = getContentType(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message);
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg =
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "viewOnceMessage"
        ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message[Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype].message[
            getContentType(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message[Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype].message)
          ]
        : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message[Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype];
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body =
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation ||
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.caption ||
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.text ||
      (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "listResponseMessage" &&
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.singleSelectReply.selectedRowId) ||
      (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "buttonsResponseMessage" &&
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.selectedButtonId) ||
      (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "viewOnceMessage" && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.caption) ||
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text;
    let quoted = (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.quotedMessage
      : null);
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionedJid = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.mentionedJid
      : [];
    if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted) {
      let type = getContentType(quoted);
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted);
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted[type];
      }
      if (typeof Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted === "string")
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = {
          text: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
        };
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.mtype = type;
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.stanzaId;
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.chatID =
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.remoteJid || Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID;
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.isBaileys = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id
        ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id.startsWith("BAE5") &&
          Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id.length === 16
        : false;
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender = ӄ𝖚𝖓𝖆𝖎.decodeJid(
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.participant
      );
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.fromMe =
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender === (ӄ𝖚𝖓𝖆𝖎.user && ӄ𝖚𝖓𝖆𝖎.user.id);
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.text =
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.text ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.caption ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.conversation ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.contentText ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.selectedDisplayText ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.title ||
        "";
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.mentionedJid = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo
        ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.mentionedJid
        : [];
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.getQuotedObj = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.getQuotedMessage = async () => {
        if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id) return false;
        let q = await Ѷ𝖎𝖔𝖓.loadMessage(
          Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
          Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id,
          ӄ𝖚𝖓𝖆𝖎
        );
        return exports.smsg(ӄ𝖚𝖓𝖆𝖎, q, Ѷ𝖎𝖔𝖓);
      };
      let vM = (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.chatID,
          fromMe: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.fromMe,
          id: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id,
        },
        message: quoted,
        ...(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? { participant: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender } : {}),
      }));
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.delete = () =>
        ӄ𝖚𝖓𝖆𝖎.sendMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.chatID, { delete: vM.key });
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.copyNForward = (
        jid,
        forceForward = false,
        options = {}
      ) => ӄ𝖚𝖓𝖆𝖎.copyNForward(jid, vM, forceForward, options);
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.download = () =>
        ӄ𝖚𝖓𝖆𝖎.downloadMediaMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted);
    }
  }
  if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.url)
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.download = () => ӄ𝖚𝖓𝖆𝖎.downloadMediaMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg);
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.text ||
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.caption ||
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation ||
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contentText ||
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.selectedDisplayText ||
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.title ||
    "";
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply = (text, chatId = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, options = {}) =>
    Buffer.isBuffer(text)
      ? ӄ𝖚𝖓𝖆𝖎.sendMedia(chatId, text, "file", "", Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, { ...options })
      : ӄ𝖚𝖓𝖆𝖎.sendText(chatId, text, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, { ...options });
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.copy = () => exports.smsg(ӄ𝖚𝖓𝖆𝖎, M.fromObject(M.toObject(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊)));
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.copyNForward = (
    jid = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
    forceForward = false,
    options = {}
  ) => ӄ𝖚𝖓𝖆𝖎.copyNForward(jid, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, forceForward, options);
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `conversation`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `imageMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.imageMessage.caption
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `videoMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.videoMessage.caption
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `extendedTextMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.text
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `buttonsResponseMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage.selectedButtonId
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `listResponseMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage.singleSelectReply.selectedRowId
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `templateButtonReplyMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.templateButtonReplyMessage.selectedId
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `messageContextInfo`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage?.selectedButtonId ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text
      : "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `extendedTextMessage` &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.hasOwnProperty(`contextInfo`) &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.hasOwnProperty(`stanzaId`);
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.budy = typeof Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text == `string` ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text : "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isCommand = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.startsWith(prefix);
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isCmd =
    prefix.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body != "" && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.slice(0, 1)) &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.slice(1) != "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isCmd
    ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘 = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.trim().split(/ +/).slice(1);
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || `No Name`;
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.botNumber = await ӄ𝖚𝖓𝖆𝖎.decodeJid(ӄ𝖚𝖓𝖆𝖎.user.id);
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isCreator = [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.botNumber, ...global.owner]
    .map((v) => v.replace(/[^0-9]/g, "") + `@s.whatsapp.net`)
    .includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender);
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender == Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.botNumber ? true : false;
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘 = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘.join(" ");
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
  let mime = (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.msg || Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted).mimetype || "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia = /image|video|sticker|audio/.test(mime);
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
    ? await ӄ𝖚𝖓𝖆𝖎.groupMetadata(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID)
    : "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
    ? await Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata.participants
    : "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
    ? await Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants
        .filter((v) => v.admin !== null)
        .map((v) => v.id)
    : "";
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
    ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.botNumber)
    : false;
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
    ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender)
    : false;
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.participant || ""
      : "";
  let MODString = MOD;
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderMOD = MODString.includes(
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.substring(0, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.indexOf(`@`))
  );
  return Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
