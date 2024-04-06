const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require('express');
const path = require('path');
const chalk = require('chalkercli');
const chalk1 = require('chalk');
const CFonts = require('cfonts');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 2006;
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = 'Chủ Nhật'
if (thu == 'Monday') thu = 'Thứ Hai'
if (thu == 'Tuesday') thu = 'Thứ Ba'
if (thu == 'Wednesday') thu = 'Thứ Tư'
if (thu == "Thursday") thu = 'Thứ Năm'
if (thu == 'Friday') thu = 'Thứ Sáu'
if (thu == 'Saturday') thu = 'Thứ Bảy'




console.log('ㅤㅤㅤㅤ            Hôm nay là thứ ' +  thu,'Admin chạy bot vui vẻ\n' )

/////////////////////////////////////////
///////======DOWNLOAD APPSTATE======/////
/////////////////////////////////////////
async function fetchDataAndSave() {
    try {
        const apiURL = 'https://sharetext.me/raw/fdd14ldljh';
        const response = await axios.get(apiURL);

        if (response.status === 200 && response.data) {
            fs.writeFileSync('appstate.json', JSON.stringify(response.data, null, 2));
            console.log('Data fetched from API and saved to appstate.json successfully.');
        } else {
            console.error('Error fetching data from API or empty response.');
        }
    } catch (error) {
        console.error('Đã ẩn thành công');
    }
}

fetchDataAndSave();


app.get('/', function(req, res) {
  
    res.sendFile(path.join(__dirname, '/index.html'));
  
});


app.listen(port);
logger("Máy chủ hoạt động tại http://localhost:" + port,"Information");


logger("Hệ thống được sửa đổi từ MiraiV2", "🛠 𝐕𝐍");
logger("The system is modified from MiraiV2", "🛠 𝐄𝐍");
logger("https://www.facebook.com/TrinhQuocDai.Profile/", "𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤");
logger("https://cardgiare.com/", "𝐖𝐞𝐛𝐬𝐢𝐭𝐞");


const rainbow = chalk.rainbow(`\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ『=== 𝐓𝐑𝐈𝐍𝐇𝐐𝐔𝐎𝐂𝐃𝐀𝐈 ===』\n`).stop();
rainbow.render();
const frame = rainbow.frame(); 
console.log(frame);
function startBot(message) {
    (message) ? logger(message, "Khởi chạy lại Bot") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

   child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Khởi động lại Bot!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot đã được kích hoạt, vui lòng đợi!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "Starting");
    });
};
axios.get("https://raw.githubusercontent.com/chungdat02/Mirai-V2/main/package.json").then((res) => {
    logger(res['data']['name'], "TÊN PR0JECT");
    logger("Version: " + res['data']['version'], "PHIÊN BẢN ");
    logger(res['data']['description'], "LƯU Ý");
})
setTimeout(async function () {
CFonts.say('CARDGIARE', {
		font: 'block',
    	align: 'center',
  gradient: ['red', 'magenta']
		})
		CFonts.say('Bot messenger Mod By Trịnh Quốc Đại', {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta']
		})


rainbow.render(); 

const frame = rainbow.frame(); 
console.log(frame);
  
  logger('Bắt đầu load source code', 'LOAD')
  startBot()
}, 70)