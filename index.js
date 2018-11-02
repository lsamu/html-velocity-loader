/**
 * 使用mock 生成数据
 * 动态加载模板
 * 开发模式使用模板   
 * 发布模式 智能插入符号
 */
var fs = require('fs');
var path = require('path');
var loaderUtils = require("loader-utils");
var Velocity = require('velocityjs');

module.exports = function (fileContent) {

    var query = loaderUtils.parseQuery(this.query);
    fileContent = query.min === false ? fileContent : fileContent.replace(/\n/g, '');

    if (/module\.exports\s?=/.test(fileContent)) {
        fileContent = fileContent.replace(/module\.exports\s?=\s?/, '');
    } else fileContent = JSON.stringify(fileContent);

    let asts = Velocity.parse(fileContent);
    let data = {
        config: data_config(),
        loop: data_loop(),
    };

    fileContent = (new Velocity.Compile(asts)).render(data);

    return "module.exports = " + fileContent;
}

/**
 * 全局配置
 */
function data_config() {
    return {
        site_title: "V5软件网"
    }
}

/**
 * 文章
 */
function data_article() {
    return {

    }
}

/**
 * 单页图文
 */
function data_diy() {
    return {

    }
}

/**
 * 留言板
 */
function data_guest() {
    return {

    }
}


/**
 * 循环数据
 */
function data_loop() {
    return {
        list: function () {

        }
    }
}