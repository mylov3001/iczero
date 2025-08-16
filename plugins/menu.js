


const { cmd, commands } = require("../command");
const config = require('../config');
const os = require('os'); // To get RAM info
const moment = require('moment'); // For uptime formatting

cmd(
  {
    pattern: "menu",
    alias: ["getmenu"],
    react: "📜",
    desc: "Get bot command list",
    category: "main",
    filename: __filename,
  },
  async (malvin, mek, m, { from, pushname, sender, reply }) => {
    try {
      // Calculate dynamic values
      const uptime = moment.duration(process.uptime() * 1000).humanize();
      const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB";
      const usedRam = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " TB";
      const owner = config.OWNER_NUMBER || "Unknown"; // fallback
      const user = pushname || sender.split("@")[0];

      // Create menu categories
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        const oneCmd = commands[i]; // <== changed cmd -> oneCmd
        if (oneCmd.pattern && !oneCmd.dontAddCommandList) {
          const line = `┃   ▪️ ${config.PREFIX}${oneCmd.pattern}\n`;
          if (menu[oneCmd.category]) {
            menu[oneCmd.category] += line;
          }
        }
      }

      const madeMenu = `  ${user}
*𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗕𝗢𝗬𝗞𝗔 𝗫𝗗* 

╭─「 𝗦𝗬𝗦𝗧𝟯𝗠 𝗦𝗧𝗔𝗧𝗨𝗦 STATUS 」 
│🤖 *Bot*: 𝗕𝗢𝗬𝗞𝗔-𝗫𝗗
│🙋‍♂️ *User*: ${user}
│📱 *Owner*: ${owner}
│⏳ *Uptime*: ${uptime}
│💾 *Ram*: ${usedRam} / ${totalRam}
│🛎️ *Prefix*: ${config.PREFIX}
╰──────────●●►

╭─「 *𝗕𝗢𝗬𝗞𝗔_𝗫𝗗*」 
│ ⚙️ _*𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗡𝗔𝗡𝗗𝗦*_
│   .alive 
│   .menu 
│   .ai <text> 
│   .system 
│   .owner 
│
│ 📥 _*𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗*_
│   .song  
│   .video  
│   .fb 
│
│ 👑 _*𝗢𝗪𝗡𝗘𝗥*_
│   .restart 
│   .update 
│
│ 🔁 *𝗖𝗢𝗡𝗩𝗘𝗥𝗧_*
│   ➥ .sticker  
│   ➥ .img 
│   ➥ .tr 
│   ➥ .tts  
╰──────────●●►
MORE CMDS SOON 🔜 | • YOU LIKE IT 

> *𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ☘🆃︎🅴︎🅻︎🅺︎🅸︎🅽︎🅶︎☘*
`;

      await malvin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/jog59s.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );

    } catch (e) {
      console.error(e);
      reply("❌ Menu error:\n" + e.message);
    }
  }
);

