let Velocity = require('velocityjs');
let fileContent = "${config.site_title} #foreach($row in $loop.list(\"article-list\",\"id=1\")) $row.title #end";

if (/module\.exports\s?=/.test(fileContent)) {
    console.log("1");
    fileContent = fileContent.replace(/module\.exports\s?=\s?/, '');
} else {
    console.log("2");
    //fileContent = JSON.stringify(fileContent);
}


let asts = Velocity.parse(fileContent);
let data = {
    config: {
        site_title: "V5软件网"
    },
    loop: {
        list: function () {
            return [{
                    id: 1,
                    title: "我是标题1"
                },
                {
                    id: 2,
                    title: "我是标题2"
                }
            ];
        }
    },
};

let s = (new Velocity.Compile(asts)).render(data);
console.log(s);