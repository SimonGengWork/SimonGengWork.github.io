window.onload = function () 
{
	var oDiv = document.getElementById('Banner');
	var aUl = oDiv.getElementsByTagName('ul');
	var oDiv1 = oDiv.getElementsByTagName('div')[0];
	var aDiv = oDiv1.getElementsByTagName('div');
	var oDiv2 = aUl[0].getElementsByTagName('div')[0];
	var oLi = aUl[0].getElementsByTagName('li')[0];
	var aLi = oDiv.getElementsByTagName('li');
	var aA = oLi.getElementsByTagName('a');
	
	//初始化
	oDiv2.style.background = 'white';
	oLi.style.display = 'block';
	for ( var i=0; i