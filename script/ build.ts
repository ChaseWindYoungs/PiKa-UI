const path = require('path');
// fs-extra
// fs-extra 是原生 fs 的替代品。该模块继承了 fs-extra 中所有方法，添加了原生 fs 模块中不包含的文件系统方法，并向 fs 方法添加了 promise 支持。

const fsextra = require("fs-extra");

// defineConfig,vite自带的工具函数，这样不用 jsdoc 注解也可以获取类型提示
// 引入vite导出的build方法，用它来创建
const { defineConfig, build } = require('vite')

// __dirname：用来动态获取当前文件模块所属目录的绝对路径
// __filename：用来动态获取当前文件的绝对路径