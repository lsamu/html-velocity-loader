var loader = require('../index.js');

var s = loader("${config.site_title} #foreach($row in $loop.list()) $row.title #end");
console.log(s);
