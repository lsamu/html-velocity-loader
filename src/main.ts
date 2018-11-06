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
import fs = require('fs');
import path = require('path');
import loaderUtils = require("loader-utils");
import Velocity = require('velocityjs');
import Mock = require('mockjs');

import { Config, Article } from './data';

function init(fileContent: string) {
    let query = loaderUtils.parseQuery(this.query);
    fileContent = query.min === false ? fileContent : fileContent.replace(/\n/g, '');
    fileContent = fileContent.replace("#include", "@include@");
    let asts = Velocity.parse(fileContent);
    let data = {
        config: data_config(),
        loop: data_loop(),
        view: {},
        list: {},
        pager: {}
    };

    fileContent = (new Velocity.Compile(asts)).render(data);

    fileContent = fileContent.replace("@include@", "#include");

    if (/module\.exports\s?=/.test(fileContent)) {
        fileContent = fileContent.replace(/module\.exports\s?=\s?/, '');
    } else {
        fileContent = JSON.stringify(fileContent);
    }

    return "module.exports = " + fileContent;
}
export = init;

/**
 * 全局配置
 */
function data_config() {
    let config_data: Config = {
        site_title: "V5软件网"
    };
    return config_data;
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
                        for (let index = 0; index < limit; index++) {
                            let model: Article = {
                                id: index,
                                title: "我是文章标题" + index
                            }
                            data.push(model);
                        }
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
                        data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                            }]
                        });
                    }
                    break;
                case "article-class":
                    {
                        data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                                "url": 'article/list.html'
                            }]
                        });
                    }
                    break;
                case "article-tag":
                    break;
                case "article-nav":
                    break;
                case "keyword-list":
                    {
                        data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1
                            }]
                        });
                    }
                    break;
                case "friend-list":
                    {
                        data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1
                            }]
                        });
                    }
                    break;
                case "diy-class":
                    {
                        data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                                "url": 'diy/list.html'
                            }]
                        });
                    }
                    break;
                case "diy-list":
                    {
                        data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1,
                                "url": 'diy/view.html'
                            }]
                        });
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
                        data = Mock.mock({
                            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                            'list|1-10': [{
                                // 属性 id 是一个自增数，起始值为 1，每次增 1
                                'id|+1': 1
                            }]
                        });
                    }
                    break;
            }
            return data;
        }
    }
}