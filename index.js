/**
 * https://github.com/lsamu/html-velocity-loader
 * 使用mock 生成数据
 * 动态加载模板
 * 开发模式使用模板   
 * 发布模式 智能插入符号
 * 文章列表   <!--article-list--> 文章详细   <!--article-view-->  文章评论   <!--article-comment--> 
 * 单页列表   <!--diy-list--> 单页详细   <!--diy-view-->  
 * 留言列表   <!--guest-list--> 单页详细   <!--guest-view-->  
 * 留言列表   <!--guest-list--> 单页详细   <!--guest-view-->  
 */
var fs = require('fs');
var path = require('path');
var loaderUtils = require("loader-utils");
var Velocity = require('velocityjs');
var Mock = require('mockjs');
var config_data = require('./lib/config')

module.exports = function (fileContent) {
    // console.log("******************************************************************************************************************************************************");
    // console.log(arguments);
    // console.log("******************************************************************************************************************************************************");
    var query = loaderUtils.parseQuery(this.query);
    fileContent = query.min === false ? fileContent : fileContent.replace(/\n/g, '');

    fileContent = fileContent.replace("#include","@include@");

    let asts = Velocity.parse(fileContent);
    let data = {
        config: config_data,
        loop: data_loop(),
        view: {},
        list: {},
        pager: {}
    };

    fileContent = (new Velocity.Compile(asts)).render(data);

    fileContent = fileContent.replace("@include@","#include");

    if (/module\.exports\s?=/.test(fileContent)) {
        fileContent = fileContent.replace(/module\.exports\s?=\s?/, '');
    } else {
        fileContent = JSON.stringify(fileContent);
    }

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
        list: function (type = "", where = "", order = "", limit = 10) {
            let data = [];
            switch (type) {
                case "article-report":
                    break;
                case "article-list":
                    {
                        let d = Mock.mock({
                            'list|10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                                'title|+1': "我是测试数据"
                            }]
                        });
                        data = d.list;
                    }
                    break;
                case "article-rand":
                    break;
                case "article-hot":
                    break;
                case "article-relate":
                    break;
                case "article-comment":
                    {
                        let data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                            }]
                        });
                        data = d;
                    }
                    break;
                case "article-class":
                    {
                        let data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                                "url": 'article/list.html'
                            }]
                        });
                        data = d;
                    }
                    break;
                case "article-tag":
                    break;
                case "article-nav":
                    break;
                case "keyword-list":
                    {
                        let data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1
                            }]
                        });
                        data = d;
                    }
                    break;
                case "friend-list":
                    {
                        let data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1
                            }]
                        });
                        data = d;
                    }
                    break;
                case "diy-class":
                    {
                        let data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                                "url": 'diy/list.html'
                            }]
                        });
                        data = d;
                    }
                    break;
                case "diy-list":
                    {
                        let data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                                "url": 'diy/view.html'
                            }]
                        });
                        data = d;
                    }
                    break;
                case "menu-list":
                    {

                    }
                    break;
                case "ad-list":
                    break;
                case "ext-list":
                    break;
                case "user-list":
                    {
                        let data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1
                            }]
                        });
                        data = d;
                    }
                    break;
            }
            return data;
        }
    }
}