const request = require('request');
const compressing = require('compressing');
const path = require('path');
const fs = require('fs');

class Iconfont {
    constructor(iconConfig) {
        this.url = iconConfig.url;
        this.toPath = iconConfig.toPath;
        this.cookie = iconConfig.cookie;
    }
    // 获取当前需要内容
    async handleProcess() {
        let responseBody = await this.getResponseBody(this.url);
        // 当前文件夹不存在就创建
        if(!fs.existsSync(this.toPath)){
            fs.mkdirSync(this.toPath);
        }
        await this.copyFile(responseBody, this.toPath);
        await this.deleteFolderRecursive(path.join(__dirname, './iconfont'));
        await this.deleteFolderRecursive(path.join(__dirname, './iconfont.zip'));
    }
    // 获取请求内容
    getResponseBody(_url) {
        return new Promise((resolve) => {
            let options = {
                url: _url,
                encoding: null,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
                    'cookie': this.cookie
                },
                debug: false,
                maxRedirects: 5,
                // 禁止跳转，防SSRF
                followRedirect: false,
                timeout: 10000
            };
            request(options, (error, response, body) => {
                return resolve(body)
            });
        })
    }
    // 文件转移
    async copyFile(body,toPath) {
        fs.writeFileSync(path.join(__dirname,'./iconfont.zip'), body);
        await compressing.zip.uncompress(path.join(__dirname, './iconfont.zip'), path.join(__dirname, './iconfont'));
        let files = fs.readdirSync(path.join(__dirname, './iconfont'));
        let targetFiles = fs.readdirSync(path.join(__dirname, `./iconfont/${files[0]}`));
        targetFiles.forEach(function (file) {
            fs.copyFileSync(
                path.join(__dirname, `./iconfont/${files[0]}/${file}`),
                `${toPath}/${file}`
            );
        });
        return Promise.resolve()
    }
    // 清空文件
    deleteFolderRecursive(path) {
        const _this = this;
        if (fs.existsSync(path)) {
            if (fs.statSync(path).isDirectory()) {
                let files = fs.readdirSync(path);
                files.forEach(function (file) {
                    let curPath = path + '/' + file;
                    if (fs.statSync(curPath).isDirectory()) {
                        _this.deleteFolderRecursive.call(this, curPath);
                    } else {
                        fs.unlinkSync(curPath);
                    }
                });
                fs.rmdirSync(path);
            } else {
                fs.unlinkSync(path);
            }
        }
    }

}

const iconfontScript = async (iconConfig) => {
    let iconfontConfig_list = iconConfig.list;
    iconfontConfig_list.map((item) => {
        item.cookie = iconConfig.cookie;
    });
    //  当项目中需要引入两个iconfont ，其中一个iconfont需要进行修改，处理修改 iconfont名称
    for (let i = 0; i < iconfontConfig_list.length; i++) {
        await new Iconfont(iconfontConfig_list[i]).handleProcess();
        if (iconfontConfig_list[i].replaceName) {
            fs.readFile('./menu/iconfont.css', 'utf-8', function (error, data) {
                //  用error来判断文件是否读取成功
                if (error) return console.log('读取文件失败,内容是' + error.message);
                let res = data.replace(/("iconfont")/g, `"${iconfontConfig_list[i].replaceName}"`).replace(/\.iconfont/g, `.${iconfontConfig_list[i].replaceName}`);
                fs.writeFileSync('./menu/iconfont.css', res);
            });
        }
    }
};

export { Iconfont, iconfontScript };
