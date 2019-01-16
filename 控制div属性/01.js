// JavaScript Document
var but_w = document.getElementsByClassName('but_width')[0];
var but_h = document.getElementsByClassName('but_height')[0];
var but_c = document.getElementsByClassName('but_color')[0];
var but_n = document.getElementsByClassName('but_none')[0];
var but_s = document.getElementsByClassName('but_space')[0];

var obox = document.getElementsByClassName('obox')[0];

but_w.onclick = function() {
	obox.style.width = '500px';
}
but_h.onclick = function() {
	obox.style.height = '500px';
}
but_c.onclick = function() {
	obox.style.background = '#000';
}
but_n.onclick = function() {
	obox.style.display = 'none';
}
but_s.onclick = function() {
	obox.style.width = '400px';
	obox.style.height = '400px';
	obox.style.background = '#fff';
	obox.style.display = 'block';
}