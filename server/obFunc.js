//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var { proto, getContentType } = require("@adiwajshing/baileys");
var { sizeFormatter } = require("human-readable");
var child_process = require("child_process");
var moment = require("moment-timezone");
var { unlink } = require("fs").promises;
var axios = require("axios");
var util = require("util");
var fs = require("fs");

var unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);
var sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
exports.unixTimestampSeconds = unixTimestampSeconds;

exports.generateMessageTag = (epoch) => {
  var tag = (0, exports.unixTimestampSeconds)().toString();
  if (epoch) tag += ".--" + epoch;
  return tag;
};

exports.processTime = (timestamp, now) => {
  return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

exports.getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.getBuffer = async (url, options) => {
  try {
    options ? options : {};
    var res = await axios({
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

exports.fetchJson = async (url, options) => {
  try {
    options ? options : {};
    var res = await axios({
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

exports.runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var mags = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay =
    mags > 0 ? mags + (mags == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  var h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  var mags = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  var s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, mags, s].map((v) => v.toString().padStart(2, 0)).join(":");
};

exports.sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

exports.isUrl = (url) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
      "gi"
    )
  );
};

exports.getTime = (format, date) => {
  if (date) {
    return moment(date).locale("id").format(format);
  } else {
    return moment.tz("Asia/Jakarta").locale("id").format(format);
  }
};

exports.formatDate = (n, locale = "id") => {
  var d = new Date(n);
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

exports.formatp = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

exports.jsonformat = (string) => {
  return JSON.stringify(string, null, 2);
};

function format(...args) {
  return util.format(...args);
}

exports.logic = (check, inp, out) => {
  if (inp.length !== out.length)
    throw new Error("Input and Output must have same length");
  for (var i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
};

exports.generateProfilePicture = async (buffer) => {
  var jimp = await jimp_1.read(buffer);
  var min = jimp.getWidth();
  var max = jimp.getHeight();
  var cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped
      .scaleToFit(720, 720)
      .getBufferAsync(jimp_1.MIME_JPEG),
  };
};

exports.bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  var i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

exports.getSizeMedia = (path) => {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        var length = parseInt(res.headers["content-length"]);
        var size = exports.bytesToSize(length, 3);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      var length = Buffer.byteLength(path);
      var size = exports.bytesToSize(length, 3);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("error gatau apah");
    }
  });
};

exports.parseMention = (text = "") => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.whatsapp.net"
  );
};

exports.GIFBufferToVideoBuffer = async (image) => {
  var filename = `${Math.random().toString(36)}`;
  await fs.writeFileSync(`./Bin/${filename}.gif`, image);
  child_process.exec(
    `ffmpeg -i ./Bin/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Bin/${filename}.mp4`
  );
  await sleep(4000);

  var buffer5 = await fs.readFileSync(`./Bin/${filename}.mp4`);
  Promise.all([
    unlink(`./Bin/${filename}.mp4`),
    unlink(`./Bin/${filename}.gif`),
  ]);
  return buffer5;
};

exports.mMake = async (BloomBot, mags, store) => {
  if (!mags) return mags;
  var νproto = proto.WebMessageInfo;
  if (mags.key) {
    mags.id = mags.key.id;
    mags.isBaileys =
      mags.id.startsWith("BAE5") && mags.id.length === 16;
    mags.chat = mags.key.remoteJid;
    mags.fromMe = mags.key.fromMe;
    mags.isGroup = mags.chat.endsWith("@g.us");
    mags.sender = BloomBot.decodeJid(
      (mags.fromMe && BloomBot.user.id) ||
        mags.participant ||
        mags.key.participant ||
        mags.chat ||
        ""
    );
    if (mags.isGroup)
      mags.participant = BloomBot.decodeJid(mags.key.participant) || "";
  }
  if (mags.message) {
    mags.mtype = getContentType(mags.message);
    mags.msg =
      mags.mtype == "viewOnceMessage"
        ? mags.message[mags.mtype].message[
            getContentType(mags.message[mags.mtype].message)
          ]
        : mags.message[mags.mtype];
    mags.body =
      mags.message.conversation ||
      mags.msg.caption ||
      mags.msg.text ||
      (mags.mtype == "listResponseMessage" &&
        mags.msg.singleSelectReply.selectedRowId) ||
      (mags.mtype == "buttonsResponseMessage" &&
        mags.msg.selectedButtonId) ||
      (mags.mtype == "viewOnceMessage" && mags.msg.caption) ||
      mags.text;
    var quoted = (mags.quoted = mags.msg.contextInfo
      ? mags.msg.contextInfo.quotedMessage
      : null);
    mags.mentionedJid = mags.msg.contextInfo
      ? mags.msg.contextInfo.mentionedJid
      : [];
    if (mags.quoted) {
      var type = getContentType(quoted);
      mags.quoted = mags.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(mags.quoted);
        mags.quoted = mags.quoted[type];
      }
      if (typeof mags.quoted === "string")
        mags.quoted = {
          text: mags.quoted,
        };
      mags.quoted.mtype = type;
      mags.quoted.id = mags.msg.contextInfo.stanzaId;
      mags.quoted.chat = mags.msg.contextInfo.remoteJid || mags.chat;
      mags.quoted.isBaileys = mags.quoted.id
        ? mags.quoted.id.startsWith("BAE5") &&
          mags.quoted.id.length === 16
        : false;
      mags.quoted.sender = BloomBot.decodeJid(
        mags.msg.contextInfo.participant
      );
      mags.quoted.fromMe =
        mags.quoted.sender === (BloomBot.user && BloomBot.user.id);
      mags.quoted.text =
        mags.quoted.text ||
        mags.quoted.caption ||
        mags.quoted.conversation ||
        mags.quoted.contentText ||
        mags.quoted.selectedDisplayText ||
        mags.quoted.title ||
        "";
      mags.quoted.mentionedJid = mags.msg.contextInfo
        ? mags.msg.contextInfo.mentionedJid
        : [];
      mags.getQuotedObj = mags.getQuotedMessage = async () => {
        if (!mags.quoted.id) return false;
        var q = await store.loadMessage(
          mags.chat,
          mags.quoted.id,
          BloomBot
        );
        return exports.mMake(BloomBot, q, store);
      };
      var vM = (mags.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: mags.quoted.chat,
          fromMe: mags.quoted.fromMe,
          id: mags.quoted.id,
        },
        message: quoted,
        ...(mags.isGroup ? { participant: mags.quoted.sender } : {}),
      }));
      mags.quoted.delete = () =>
        BloomBot.sendMessage(mags.quoted.chat, { delete: vM.key });
      mags.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        BloomBot.copyNForward(jid, vM, forceForward, options);
      mags.quoted.download = () =>
        BloomBot.downloadMediaMessage(mags.quoted);
    }
  }

  if (mags.msg.url)
    mags.download = () => BloomBot.downloadMediaMessage(mags.msg);
  mags.text =
    mags.msg.text ||
    mags.msg.caption ||
    mags.message.conversation ||
    mags.msg.contentText ||
    mags.msg.selectedDisplayText ||
    mags.msg.title ||
    "";
  mags.reply = (text, chatId = mags.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? BloomBot.sendMedia(chatId, text, "file", "", mags, { ...options })
      : BloomBot.sendText(chatId, text, mags, { ...options });
  mags.copy = () =>
    exports.mMake(BloomBot, νproto.fromObject(νproto.toObject(mags)));
  mags.copyNForward = (
    jid = mags.chat,
    forceForward = false,
    options = {}
  ) => BloomBot.copyNForward(jid, mags, forceForward, options);

  return mags;
};

var file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  delete require.cache[file];
  require(file);
});