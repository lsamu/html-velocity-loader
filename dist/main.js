"use strict";
var loaderUtils = require("loader-utils");
var Velocity = require("velocityjs");
var Mock = require("mockjs");
function init(fileContent) {
    var query = loaderUtils.parseQuery(this.query);
    fileContent = query.min === false ? fileContent : fileContent.replace(/\n/g, '');
    fileContent = fileContent.replace("#include", "@include@");
    var asts = Velocity.parse(fileContent);
    var data = {
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
    }
    else {
        fileContent = JSON.stringify(fileContent);
    }
    return "module.exports = " + fileContent;
}
function data_config() {
    var config_data = {
        site_title: "V5软件网"
    };
    return config_data;
}
function data_loop() {
    return {
        list: function (type, where, order, limit) {
            if (type === void 0) { type = ""; }
            if (where === void 0) { where = ""; }
            if (order === void 0) { order = ""; }
            if (limit === void 0) { limit = 10; }
            var data = [];
            switch (type) {
                case "article-report":
                    break;
                case "article-list":
                    {
                        for (var index = 0; index < limit; index++) {
                            var model = {
                                id: index,
                                title: "我是文章标题" + index
                            };
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
                            'list|1-10': [{
                                    'id|+1': 1,
                                }]
                        });
                    }
                    break;
                case "article-class":
                    {
                        data = Mock.mock({
                            'list|1-10': [{
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
                            'list|1-10': [{
                                    'id|+1': 1
                                }]
                        });
                    }
                    break;
                case "friend-list":
                    {
                        data = Mock.mock({
                            'list|1-10': [{
                                    'id|+1': 1
                                }]
                        });
                    }
                    break;
                case "diy-class":
                    {
                        data = Mock.mock({
                            'list|1-10': [{
                                    'id|+1': 1,
                                    "url": 'diy/list.html'
                                }]
                        });
                    }
                    break;
                case "diy-list":
                    {
                        data = Mock.mock({
                            'list|1-10': [{
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
                            'list|1-10': [{
                                    'id|+1': 1
                                }]
                        });
                    }
                    break;
            }
            return data;
        }
    };
}
module.exports = init;
