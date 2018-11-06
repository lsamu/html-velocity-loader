"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("./main"));
var template = "\n<h1>${config.site_title}</h1> \n\n#foreach($row in $loop.list(\"article-list\")) \n    <a href=\"#\">\n    $row.title \n    </a>\n#end\n\n";
var html = main_1.default(template);
console.log(html);
