"use strict"
var fs = require('fs'),
    $path1 = '/home/xingliu/bigood/auto/md/',
    $path2 = '/home/xingliu/bigood/auto/jade/';

fs.readdir($path1, function(error, files){
    if (error) {
        console.warn(error);
    } else {
        for (var i = 0; i < files.length; i++) {
            // 获取文件名并判断 jade 下是否有对应文件
            console.log(files[i]);
            // console.log(files[i].substr(-3, 5));
            // 获取文件内容
            // fs.readFile($path1 + files[i], 'utf-8', function(error, data){
            //     if (error) {
            //         console.warn(error);
            //     } else {
            //         console.log(data);
            //     }
            // });
        }
    }
});
