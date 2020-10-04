window.onload = function (){
	let orders = JSON.parse(localStorage.getItem("orders"));
	//console.log('orders till now' , orders.length);
	if(orders === null){
		let cont = 
		`<p style="color:'white"> You havent ordered anything yet </p>
		`
		console.log('if implemented');
		document.getElementById('t2').style.visibility = 'visible';
	}else{

		document.getElementById('t2').style.visibility = 'hidden';
		console.log("orders till now" , orders.length);
		var t1 = 0, t2 = 0 , cost = 0;
		for(var i = 0; i < orders.length; i++){
			let dt = orders[i];
			console.log('orders placed' , dt);
			console.log('orders placed' , dt.name);
			console.log('orders placed' , dt.desc);
			console.log('orders placed' , dt.url);
			console.log('orders placed' , dt.price);
			if(i == 0){
				document.getElementById("imm1").src = orders[i].url;
				document.getElementById("ii1").innerHTML = orders[i].name;
				document.getElementById("ii2").innerHTML = orders[i].desc;
				document.getElementById("ii3").innerHTML = "Price: "+orders[i].price+" per hour";
				t1 = document.getElementById("inn1").value;
				cost = cost + orders[i].price * t1;
				console.log("cost" , cost);
			}
			else if(i==1)
			{
				document.getElementById("imm2").src = orders[i].url;
				document.getElementById("ii5").innerHTML = orders[i].name;
				document.getElementById("ii6").innerHTML = orders[i].desc;
				document.getElementById("ii7").innerHTML = "Price: " + orders[i].price+" per hour";
				t2 = document.getElementById("inn2").value;
				cost = cost + orders[i].price * t2;
				console.log("cost" , cost);
			}
		}
		document.getElementById("cos").innerHTML = "Total Price: " + cost;
	}
}

function remove_orders(){
	localStorage.removeItem("orders");
	if(localStorage.getItem("orders") === null){
		console.log("item deleted successfully");
	}
	window.alert("Your payment has been received");
}