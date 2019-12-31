const express = require('express');
const fs = require("fs");
const app = express();
// 从根目录开始的
app.use('/static', express.static("h5/src"));

app.listen(3030, function() {   //监听http://127.0.0.1:3030端口
    console.log("server start");
});