//需求:  使a标签图片的链接替换到当前页面上的图片中
//步骤: 1.获取a标签href的链接
//		2.获取当前图片占位符的链接
//		3.在点击a标签时使占位符的链接替换为a标签的href
function showPic(thisPic) {
	// body...
	var pic_href = thisPic.getAttribute("href");
	var placeholder = document.getElementById('placeholder');

	placeholder.setAttribute("src",pic_href);
}