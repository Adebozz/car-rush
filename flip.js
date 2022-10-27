var image = document.getElementsByTagName('img'),
	canvas = document.getElementsByClassName('canvas')[0],
	match = [],
	pic = [],
	score = 0;

for (let i = 0; i < 30; i++) {
	var sources = ["img/adeboss_1.jpg", "img/adem.bmp", 
		"img/backgrond1.jpeg", "img/brown.jpg", "img/phone.jpg",
		"img/pink.jpg", "img/dat.jpg","img/1.jpg","img/2.jpg","img/3.jpg",
		"img/4.jpg","img/5.jpg","img/6.jpg",/*"img/7.jpg","img/8.jpg",
		"img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpeg","img/13.jpeg","img/14.jpeg","img/15.jpeg"*/],
		index = Math.round(Math.random() * sources.length - 1),
		img = document.createElement('img');
	canvas.appendChild(img)
	img = document.getElementsByTagName('img')[i]
	img.style.margin = "0.6% 0.9%"
	img.addEventListener('click', expose)
	if (index == -1){
		img.src = sources[3]
	}
	else{
		img.src = sources[index]
	}
}

function expose() {
	this.style.animation = "none"
	this.style.filter = "brightness(1)"
	match.push(this.src)
	pic.push(this)

	if (match.length % 2 == 0) {
		if (match[match.length - 1] == match[match.length - 2]){
			score++
			document.getElementsByTagName('span')[1].innerHTML = score;
			setTimeout(function(){
				pic[pic.length - 1].src = "img/white.png"
				pic[pic.length - 2].src = "img/white.png"
				pic[pic.length - 1].removeEventListener('click', expose)
				pic[pic.length - 2].removeEventListener('click', expose)
			}, 300)
		}
		

		else{
			pic[pic.length - 1].style.filter = "brightness(0)"
			pic[pic.length - 2].style.filter = "brightness(0)"
			pic[pic.length - 2].addEventListener('click', expose)
		}
	}
	else{
		this.removeEventListener('click', expose)
	}

}

let dragged = false
window.addEventListener('mousedown', function(){dragged = true})	
window.addEventListener('mouseenter', function(){
	if (dragged == true) {
		console.log(1)
	}
})
//Time setting
var scored= -1;
var time= 60;

setInterval(function() {
	if(time >= 1){
	time = time - 1;
	}

	document.getElementById('score').innerHTML = time + " Secs"

	if (time == 0) {
		document.getElementById('num').innerHTML = +score;
		// document.write(
		// 	"Game Over " +
		// 	"Score = " + score
		// 	)
		document.getElementsByClassName('canvas')[0].style.display= "none";
		document.getElementsByClassName('out')[0].style.display='initial';
		document.getElementById('num').style.top= '40%';
	}
}, 1000)

setTimeout(() => {
	document.getElementsByTagName('html')[0].style.opacity = "1"
	document.getElementsByTagName('html')[0].style.width = "100%"}, 50)