//步骤:
//	1.获取图片框的src属性,用于进行图片切换
//	2.获取生肖按钮的href值
//	3.当点击生肖按钮时,将其href值给予图片框的src值.

var sXiao = document.getElementsByTagName('a');
var tKu = document.getElementById('fu');

for(let i=0; i<sXiao.length; i++){
	sXiao[i].onclick = function(){
		var hScr = sXiao[i].getAttribute('href');
		tKu.setAttribute('src',hScr);
		return false;
	}
}