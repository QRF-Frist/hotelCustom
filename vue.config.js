module.exports = {
    lintOnSave: false,
    devServer:{
        proxy:{
            '/custom/login':{
                target:'http://127.0.0.1:3030',
                changeOrigin:true,
                ws:true
            },
            '/custom/register':{
                target:'http://127.0.0.1:3030',
                changeOrigin:true,
                ws:true
            },
            '/custom/getAllRoomInfo': {
                target: 'http://127.0.0.1:3030',
                changeOrigin: true,
                ws: true,
            }
        }
    }
}