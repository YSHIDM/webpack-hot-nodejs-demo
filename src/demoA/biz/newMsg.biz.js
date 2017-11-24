const fs = require('fs');
module.exports = {
    evt: 'msg',
    fn() {
        console.log('msg hanlder....');
        if (a == 0) {
            write("friend.biz.js", `
module.exports =  {
evt:'friend', 
fn() {
console.log('friend hanlder....123'); 
}
}; 
`);
        }
    }
};
var a = 0;

function write(fileName, data) { //生成文件，写入内容
    //"a":没有则生成，否则追加 "w":覆盖
    fs.open("E:/js/webpack-hot-nodejs-demo-master/src/demoA/biz/" + fileName, "w", 0644, function(e, fd) { 
        if (e) throw e;
        fs.write(fd, data, 0, 'utf8', function(e) {
            if (e) throw e;
            a = 1;
            fs.closeSync(fd);
        });
    });
}
