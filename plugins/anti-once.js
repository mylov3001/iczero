/*
const { cmd } = require("../command");

cmd({
  pattern: "vv2",
  alias: ["wah", "ohh", "oho", "🙂", "nice", "ok"],
  desc: "Owner Only - retrieve quoted message back to user",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isOwner }) => {
  try {
    if (!isOwner) {
      return; // Simply return without any response if not owner
    }

    if (!match.quoted) {
      return await client.sendMessage(from, {
        text: "*🍁 Please reply to a view once message!*"
      }, { quoted: message });
    }

    const buffer = await match.quoted.download();
    const mtype = match.quoted.mtype;
    const options = { quoted: message };

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "image/jpeg"
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: match.quoted.ptt || false
        };
        break;
      default:
        return await client.sendMessage(from, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: message });
    }

    //Forward to user's DM
    await client.sendMessage(message.sender, messageContent, options);
  } catch (error) {
    console.error("vv Error:", error);
    await client.sendMessage(from, {
      text: "❌ Error fetching vv message:\n" + error.message
    }, { quoted: message });
  }
});
*/
/*
const { cmd } = require("../command");

cmd({
  pattern: "vv2",
  alias: ["wah", "ohh", "oho", "🙂", "nice", "ok"],
  desc: "Owner Only - retrieve quoted message back to user",
  category: "owner",
  filename: __filename
}, async (client, message, match, { from, isCreator }) => {
  try {
    if (!isCreator) {
      return; // Simply return without any response if not owner
    }

    if (!match.quoted) {
      return await client.sendMessage(from, {
        text: "*🍁 Please reply to a view once message!*"
      }, { quoted: message });
    }

    const buffer = await match.quoted.download();
    const mtype = match.quoted.mtype;
    const options = { quoted: message };

    let messageContent = {};
    switch (mtype) {
      case "imageMessage":
        messageContent = {
          image: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "image/jpeg"
        };
        break;
      case "videoMessage":
        messageContent = {
          video: buffer,
          caption: match.quoted.text || '',
          mimetype: match.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        messageContent = {
          audio: buffer,
          mimetype: "audio/mp4",
          ptt: match.quoted.ptt || false
        };
        break;
      default:
        return await client.sendMessage(from, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: message });
    }

    // Forward to user's DM
    await client.sendMessage(message.sender, messageContent, options);
  } catch (error) {
    console.error("vv Error:", error);
    await client.sendMessage(from, {
      text: "❌ Error fetching vv message:\n" + error.message
    }, { quoted: message });
  }
});
*/
const { cmd } = require("../command");
cmd(
  {
    pattern: "vv2",
    alias: ["viewonce", "retrive"],
    desc: "download viewOnce Message.",
    category: "whatsapp",
    use: "<query>",
    react: "🫦",
    filename: __filename,
  },
  async (_0x5e331d, _0x237d8a) => {
    try {
      var _0x17ffa2 = false;
      if (_0x5e331d.reply_message) {
        if (
          _0x5e331d.reply_message.viewOnce ||
          ((_0x5e331d.device === "ios" || _0x5e331d.device === "android") &&
            /audioMessage|videoMessage|imageMessage/g.test(
              _0x5e331d.reply_message.mtype
            ))
        ) {
          _0x17ffa2 = _0x5e331d.reply_message;
        }
      }
      _0x17ffa2.mtype = _0x17ffa2.mtype2;
      if (!_0x17ffa2) {
        return _0x5e331d.reply("```Please Reply A ViewOnce Message```");
      }
      let _0x86453 = {
        key: _0x17ffa2.key,
        message: {
          conversation: "```[🤫🍆😁]```",
        },
      };
      let _0x22f0a2 = await _0x5e331d.bot.downloadAndSaveMediaMessage(
        _0x17ffa2.msg
      );
      // Modified line below: Changed _0x5e331d.jid to _0x5e331d.sender for inbox
      await _0x5e331d.bot.sendMessage(
        _0x5e331d.sender, // This sends to user's personal inbox
        {
          [_0x17ffa2.mtype2.split("Mess")[0]]: {
            url: _0x22f0a2,
          },
          caption: _0x17ffa2.body,
        },
        {
          quoted: _0x86453,
        }
      );
    } catch (_0x23316d) {
      await _0x5e331d.error(_0x23316d + "\n\ncommand: vv2", _0x23316d);
    }
  }
);
