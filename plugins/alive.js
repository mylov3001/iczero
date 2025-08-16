const { cmd } = require("../command");

cmd(
  {
    pattern: "alive",
    react: "🤖",
    desc: "Show bot status",
    category: "main",
    filename: __filename,
    fromMe: false,
  },
  async (malvin, mek, m, { reply }) => {
    try {
      const from = mek.key.remoteJid;

      await malvin.sendPresenceUpdate("recording", from);

      // Alive Image & Caption
      await malvin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/vofmjs.jpg",
          },
          caption: `BOYKA XD 𝗜𝗦 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪
          
CREATED WITH LOVE BY ‎☘🆃︎🅴︎🅻︎🅺︎🅸︎🅽︎🅶︎☘
  
𝗼𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗰𝗵𝗮𝗻𝗲𝗹 -: https://whatsapp.com/channel/0029VaraMtfFcowAKRdDdp1T

𝗚𝗶𝘁 𝗛𝘂𝗯 𝗥𝗲𝗽𝗼 -: https://github.com/Joshuamambo1/BOYKA-XD

𝗢𝘄𝗻𝗲𝗿 -: https://YouTube.com/@joshuamambo1
          
`,
        },
        { quoted: mek }
      );

      // Delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Voice Message
      await malvin.sendMessage(
        from,
        {
          audio: {
            url: "https://files.catbox.moe/vpnqp7.mp3",
          },
          mimetype: "m4a/mp3",
          ptt: true,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error("❌ Error in .alive command:", e);
      reply("❌ Error while sending alive message!");
    }
          })
