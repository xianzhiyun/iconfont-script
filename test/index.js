const path = require('path')
const {iconfontScript} = require('..');
const iconConfig = {
        cookie: 'xxxxxxxx',
        list: [
            {
                url: 'https://www.iconfont.cn/api/project/download.zip?spm=a313x.7781069.1998910419.d7543c303&pid=724179&ctoken=19DKMjRBi14qCZ3dibnLdK5n',
                toPath: path.join(__dirname, './features')
            },
            {
                url: 'https://www.iconfont.cn/api/project/download.zip?spm=a313x.7781069.1998910419.d7543c303&pid=724179&ctoken=19DKMjRBi14qCZ3dibnLdK5n',
                toPath: path.join(__dirname, './menu'),
                replaceName: 'iconfont-menu',
            }
        ]
    }


iconfontScript(iconConfig)

































