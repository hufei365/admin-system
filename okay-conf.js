fis.set('charset', 'utf-8');
fis.set('namespace', "admin");
fis.set('map_file', '/src/resource-map.js');


fis.hook(require('fis3-hook-npm'));

fis.match('/src/**\.js', {
    isMod:true,
    parser: fis.plugin('babel-7.x', {
        sourceMap: false
    })
})
.match('/src/**\.min\.{js, css}',{
    // useCompile:false,
    useSprite:false,
    parser:null
})
.match('/**\.{css,scss}', {
    // 图片合并
    useSprite: true
});

fis.match('{/src/resource-map.js,/src/components/libs/require.js}', {
    isMod: false,
    parser: null
});
fis.match('::package', {
    // 图片合并
    spriter: fis.plugin('csssprites', {
        // 排列方式, linear || matrix
        layout: 'linear'
    })
});

// 编译vue组件
fis.match('/src/**.vue', {
    parser: [    
        fis.plugin('vue-component', {
            runtimeOnly: true,
            styleNameJoin: '',
            extractCSS: false,
            cssScopedIdPrefix: '_v-',
            cssScopedHashType: 'sum',
            cssScopedHashLength: 8,
            cssScopedFlag: '__vuec__',
			isPartial:false,
        })
		,fis.plugin('babel-7.x', {
            sourceMap: false
        }) // 处理ES6
    ]
});

// fis.match('*.{css,scss}', {
//     // 开启图片压缩;
//     // useSprite: true,
//     // css 压缩;
//     optimizer: fis.plugin('clean-css')
//     // ,packTo: '/pkg/quizcenter.css'
// })
// .match('{**.js,**.vm:js,**.html:js,**.vue}', {
//     // js 压缩;
//     optimizer: fis.plugin('uglify-js', {})
// });


fis.match('/src/(**.{html, js, png, scss, css, jpg, vue})', {
    release :'$1',
    // deploy: fis.plugin('local-deliver', {
    //     to: path.resolve(__dirname, './output')
    // })
});
fis.match('/src/(**).vue', {
    release :'$1.vue.js',
    // deploy: fis.plugin('local-deliver', {
    //     to: path.resolve(__dirname, './output')
    // })
});


fis.match('/node_modules/(*)/**.js', {
    release :'$0',
    // deploy: fis.plugin('local-deliver', {
    //     to: path.resolve(__dirname, './output')
    // })
});



fis.media('112').match('/src/(**.{html, js, png, scss, css, jpg, vue})', {
    release :'$1',
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.60.0.112:7999/okay-upload',
        to: '/xdfapp/www/xin.static.fe.xk12.cn'
    })
})
.match('/src/(**).vue', {
    release :'$1_vue.js',
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.60.0.112:7999/okay-upload',
        to: '/xdfapp/www/xin.static.fe.xk12.cn'
    })
})
.match('/node_modules/**.js', {
    release :'$0',
    deploy: fis.plugin('http-push', {
        receiver: 'http://10.60.0.112:7999/okay-upload',
        to: '/xdfapp/www/xin.static.fe.xk12.cn',
    })
});