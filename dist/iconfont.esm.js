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

    async handleProcess() {
        let responseBody = await this.getResponseBody(this.url);
        await this.copyFile(responseBody, this.toPath);
        await this.deleteFolderRecursive(path.join(__dirname, './iconfont'));
        await this.deleteFolderRecursive(path.join(__dirname, './iconfont.zip'));
    }

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

export { Iconfont };
