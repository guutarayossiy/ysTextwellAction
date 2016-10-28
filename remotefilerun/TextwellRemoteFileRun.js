//使うかどうかは別として…
//Textwellのアクションに書くコード
//読み込むjsファイルのURL
var surl = "http://exampleurl/example.js";
//XMLHttpRequestで取得　※オフラインは不可
var req = new XMLHttpRequest();
req.open("GET", surl, false);
req.send("");
//結果テキストを保存
var reqtxt = req.responseText;
//alert(reqtxt);　//デバッグ用

//……………………jsコード実行！
eval(req.responseText);