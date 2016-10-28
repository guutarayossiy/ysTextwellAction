BLOGTITLE=' – たらハコ';
BLOGURL='https://tarahako.com';
var strlink='';
T.closelets(
  [
    {title: "SmartShare",
      fn: function(arg){
        var stitle=document.title.replace(arg.btitle,'')
        ,surl=location.href
        ,i=document.getElementById('Entry').getElementsByTagName('img')[0].src.replace(/http:\/\/.+\.wp\.com\//,'http://').replace(/\?.*$/,'').replace(/\.pagespeed.+$/,'').replace('.jpg','-150x150.jpg').replace('.png','-150x150.png');
        var cimg='<a href="'+surl+'"><img class="ysShareImg" src="'+i+'" alt="'+stitle+'" /></a>';
        surl='<div class="ysShare">'+cimg+'<a href="'+surl+'">'+stitle+'</a></div>';
        strlink = surl;
        if(T.data['selecttext'].length > 0) {
          T( 'replaceWhole', {text:strlink})
        } else {
          T( 'insert', {text:strlink})
        }
        T('done');
      },
      arg:{btitle:BLOGTITLE}
    },
    {
      title: "<a>tag",
      fn : function(arg){
        var stitle=document.title.replace(arg.btitle,'')
         ,surl=location.href,atext=T.data['selecttext'];
         if(atext==''){
           atext = stitle;
         }
         strlink = '<a href="'+surl+'">'+atext+'</a>';
         if(T.data['selecttext'].length > 0) {
            T( 'replaceWhole', {text:strlink})
         } else {
            T( 'insert', {text:strlink})
         }
         T('done');
       },
      arg:{btitle:BLOGTITLE}
    },
    {
      title: "<li><a>tag",
      fn : function(arg){
        var stitle=document.title.replace(arg.btitle,'')
         ,surl=location.href,atext=T.data['selecttext'];
         if(atext==''){
           atext = stitle;
         }
         strlink = '<li><a href="'+surl+'">'+atext+'</a></li>';
        if(T.data['selecttext'].length > 0) {
          T( 'replaceWhole', {text:strlink})
        } else {
          T( 'insert', {text:strlink})
        }
        T('done');
      },
      arg:{btitle:BLOGTITLE}
    },
    {
      title: "MarkdownLink",
      fn:function(arg){
        var stitle=document.title.replace(arg.btitle,''),surl=location.href,ssltext=T.data['selecttext'],sfunc='replaceWhole';
        if(ssltext.length <= 0) {
          ssltext = stitle;
          sfunc = 'insert';
        }
        strlink = "["+ssltext+"]("+surl+")";
        T( sfunc, {text:strlink})
        T('done');
      },
      arg:{btitle:BLOGTITLE}
    }
  ],
  function(){
    s=T.selectedText;
    T.setData('selecttext',s)
    strserch=prompt('検索ワード',s);
    if(strserch){
      //location.href="http://tarahako.com/?s="+encodeURIComponent(strserch);
      location.href=BLOGURL+"/?s="+encodeURIComponent(strserch);
    }else{
    	//location.href="https://tarahako.com/";
    	location.href="https://google.com/";
    }
  }
);
