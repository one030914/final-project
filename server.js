//install: node js
//install web server package: express >npm install express
const express = require("express");
const server = express();
const port = 3000;


//web root
server.use(express.static(__dirname + "/GG")); //提供靜態檔案服務

//database
const DB = require("nedb-promises");
const drawDB = DB.create(__dirname + "/draw.db");

// drawDB.insert([
//     {order:1,title: "天秤宮",description: "高中時畫的作品，第一次嘗試複雜的背景繪製",image: "../img/天秤宮.jpg",},
//     {order:2,title: "Maria",description: "最近很喜歡的遊戲角色，又颯又美",image: "../img/maria.JPG",},
//     {order:3,title: "Mercy", description: "有一款叫overwatch的遊戲裡，我最喜歡的角色",image: "../img/天使.JPG"},
//     {order:4,title: "龍年賀圖",description: "第一次挑戰畫寫實的龍，花了很多時間研究跟摸索",image: "../img/龍.JPG"},
//     {order:5,title: "風信與慕情",description: "這是我很喜歡的一對小說角色",image: "../img/風情.JPG"},
//     {order:6,title: "兵長", description: "之前很喜歡的一個動漫角色，我花了很多時間研究金屬的刻痕要怎麼繪製",image: "../img/兵長賀圖.jpg"}
// ])

server.get("/draw", (req, res) => {
    //DB
    drawDB.find({}).then((results) => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    });
});

// 啟動伺服器
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
