function f(){
	var x=document.getElementById("id1");
	setTimeout(function(){x.innerHTML="Thank you!";},1050);
	setTimeout(function(){x.innerHTML=" ";},5000);
}

