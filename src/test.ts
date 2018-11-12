
import main from './main';

let template =`
<h1>$\{config.site_title}</h1> 

#foreach($row in $loop.list(\"article-list\")) 
    <li>
    <a href=\"#\">
    $row.title 
    </a>  
    </li>
#end

`;
let html = main(template);
console.log(html);
console.log("hello");