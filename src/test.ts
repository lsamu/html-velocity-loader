
import main from './main';

let template =`
<h1>$\{config.site_title}</h1> 

#foreach($row in $loop.list(\"article-list\")) 
    <a href=\"#\">
    $row.title 
    </a>
#end

`;
let html = main(template);
console.log(html);