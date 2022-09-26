//car creation

var lane = document.getElementsByClassName('lane');

for (var b = 0; b < lane.length; b++) {
	for (c = 0; c < 3; c++) {
		var car = document.createElement('div')
		car.className = "car"
		lane[b].appendChild(car)
	}
}

//car animation

var reds = document.getElementsByClassName('r'),
	yellows = document.getElementsByClassName('y'),
	greens = document.getElementsByClassName('g');

function nav() {
		for(w = 1; w<3; w++){
		reds[w].style.backgroundColor = "rgba(255,0,0,1.0)";
		greens[w].style.backgroundColor= "rgba(0,255,0,0.2)"
		}

	if (reds[0].style.backgroundColor == "rgba(255, 0, 0, 0.2)") {

		
	}
}

var displacement = 0,
	coordinates = {
		a: [],
		b: [],	
		c: [],
		d: [],
		e: [],	
		f: [],
		g: [],
		h: [],	
		i: [],
		j: [],
		k: [],	
		l: []
	},
	go = true,
	car = document.getElementsByClassName('car'),
	movement = setInterval(function() { if (go == true) {
		displacement = displacement + 0.1;
		if (displacement <= 500) {
			let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
			for (var a = 0; a < 3; a++) {
				coordinates[letters[a]][0] = displacement
				car[a].style.marginRight = coordinates[letters[a]][0] + "px"
			}
			for(var b= 3; b< 6; b++){
				coordinates[letters[b]][0] = displacement
			 	car[b].style.marginLeft = coordinates[letters[b]][0] + "px"
			}
			for (var c = 6; c < 9; c++) {
				coordinates[letters[c]][0] = displacement
				car[c].style.marginTop = coordinates[letters[c]][0] + "px"
			}
			for (var d = 9; d < 12; d++) {
				coordinates[letters[d]][0] = displacement
				car[d].style.marginBottom = coordinates[letters[d]][0] + "px"
			}
		}
		else{
			nav()
			clearInterval(movement);
			displacement = 0;
		}}	
	}, 0.01)

//traffic light controls
	var alter,
		rd1on = false;
	function rd1(){
		if(rd1on == false) {
			reds[0].style.backgroundColor = "rgba(255,0,0,1.0)"
			alter = setInterval(alt, 0.005)
			rd1on = true
		}
		else if (rd1on == true){
			reds[0].style.backgroundColor = "rgba(255,0,0,0.2)"
			rd1on = false
			go = true
			clearInterval(alter)
		}
	}

	function alt() {
		if(200 < displacement && displacement < 210 && rd1on == true) {
			go = false
		}
	}

	// function rd2(){
	// 	reds[1].style.backgroundColor = "rgba(255,0,0,1.0)"
	// }
	// function rd3(){
	// 	reds[2].style.backgroundColor = "rgba(255,0,0,1.0)"
	// }
	// function rd4(){
	// 	reds[3].style.backgroundColor = "rgba(255,0,0,1.0)"
	// }
	// function yw1(){
	// 	yellows[0].style.backgroundColor = "rgba(255,255,0,1.0)"
	// }
	// function yw2(){
	// 	yellows[1].style.backgroundColor = "rgba(255,255,0,1.0)"
	// }
	// function yw3(){
	// 	yellows[2].style.backgroundColor = "rgba(255,255,0,1.0)"
	// }
	// function yw4(){
	// 	yellows[3].style.backgroundColor = "rgba(255,255,0,1.0)"
	// }
	// var d=0;
	// function grn1(){
	// 	if(d==0){
	// 		greens[0].style.backgroundColor = "rgba(0,255,0,1.0)"
	// 		d=1
	// 	}
	// 	else{
	// 		greens[0].style.backgroundColor = "rgba(0,255,0,0.2)"
	// 		d=0
	// 	}
	// }
	// var c=0;
	// function grn2(){
	// 	if(c==0){
	// 	greens[1].style.backgroundColor = "rgba(0,255,0,1.0)"
	
	// 	c=1
	// 	}
	// 	else{
	// 	greens[1].style.backgroundColor = "rgba(0,255,0,0.2)"
	// 	c=0	
		

	// 	}
	// }
	// var b = 0;
	// function grn3(){
	// 	if(b==0){
	// 	greens[2].style.backgroundColor = "rgba(0,255,0,1.0)";
	// 	b=1
	// 	}
	// 	else if(b==1){
	// 		greens[2].style.backgroundColor = "rgba(0,255,0,0.2)"
	// 		b=0;
	// 	}
	// }
	// var a = 0
	// function grn4(){
	// 	if(a==0){
	// 	greens[3].style.backgroundColor = "rgba(0,255,0,1.0)";
	// 	 a = 1
		 
	// 	}
	// 	else if(a==0 && displacement<=500){
	// 		for(var b= 3; b< 6; b++){
				
	// 		 	car[b].style.marginLeft = displacement + "px"
	// 		}
	// 	}
	// 	else if(a==1){
	// 		greens[3].style.backgroundColor = "rgba(0,255,0,0.2)"
	// 		a = 0
	// 	}
	// }