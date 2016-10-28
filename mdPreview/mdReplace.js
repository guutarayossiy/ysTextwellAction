function mdreplace(text){
    var result = '';
    var BlogTitle = ' – たらハコ';

    result =
      text
        .replace(BlogTitle,'')
        .replace(/ id=".+?"/g,'')
        .replace('<p>[lastnumber]</p>',"\n[lastnumber]\n")
        .replace(/<p><p>/g,'<p>')
        .replace(/<\/p><\/p>/g,'</p>')
        .replace(/<h2>/g,"\n\n<h2>")
        .replace(/<\/h2>/g,"</h2>\n")
        .replace(/<h3>/g,"\n<h3>")
        .replace(/<\/h3>/g,"</h3>\n")
        .replace('<!--more-->',"\n<!--more-->")
        .replace(/<pre>/g,"\n<pre>")
        .replace(/<\/pre>/g,"</pre>\n\n")
        .replace(/<pre><code>/g,"<pre>")
        .replace(/<\/code><\/pre>/g,"</pre>");

    return result;
};