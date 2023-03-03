/*-----------------------slider----------------------------------*/

window.onload = () =>{

	let left = document.getElementById("left");
	let right = document.getElementById("right");
	listeners();
	menuWork();
}

function getX(x) {
	x = x.split("");
	x.pop();
	x.pop();
	x = x.join("");
	console.log("x =" + x);
	return +x;
}


function listeners(){

	let sliderPhoto =[0, document.getElementById("slider_photo1"),
			document.getElementById("slider_photo2"),
			document.getElementById("slider_photo3"),
			document.getElementById("slider_photo4"),
			document.getElementById("slider_photo5"),
			document.getElementById("slider_photo6"),
			document.getElementById("slider_photo7")];

	left.addEventListener("click", () =>{

		if (getX(getComputedStyle(sliderPhoto[1]).left) > -1400){
			
			for(i=1; i<=7; i++){
			let arr = getComputedStyle(sliderPhoto[i]).left.split('');
			arr.pop();
			arr.pop();
			let x = arr.join('');
			sliderPhoto[i].style.cssText = `left:${x-400}px; transition:0.5s;`;
			left.style.cssText = "display:none;";
			}
			
			setTimeout(() => {
				right.style.cssText = "display:block;";
				if (getX(getComputedStyle(sliderPhoto[1]).left) > -1399){
					left.style.cssText = "display:block;";
				}
			}, 500);

		} else {
			left.style.cssText = "display:none;";
		}
	});

	right.addEventListener("click", () =>{

		if (getX(getComputedStyle(sliderPhoto[1]).left) < 0){

			for(i=1; i<=7; i++){
			let arr = getComputedStyle(sliderPhoto[i]).left.split('');
			arr.pop();
			arr.pop();

			let x = arr.join('');

			sliderPhoto[i].style.cssText = `left:${Number(x) + 400}px; transition:0.5s;`;
			right.style.cssText = "display:none;";
			}
			
			setTimeout(() => {
				left.style.cssText = "display:block;";
					if (getX(getComputedStyle(sliderPhoto[1]).left) < -1){
				right.style.cssText = "display:block;";
					}
			}, 500);
		} else {
			right.style.cssText = "display:none;";
		}
	});
}

/*----------------вылет слева----------------*/

const observerLeft = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting){
			entry.target.classList.add("animationLeft");
		}
	});
});


/*----------------вылет справа----------------*/

const observerRight = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting){
			entry.target.classList.add("animationRight");
		}
	});
});

/*---------------------обработка событий прокрутки---------------*/

observerLeft.observe(document.getElementById("ourWorks"));
observerRight.observe(document.getElementById("mainSliderContainer"));
observerLeft.observe(document.getElementById("price"));
observerRight.observe(document.getElementById("mainPrice"));
observerLeft.observe(document.getElementById("findUs"));
observerRight.observe(document.getElementById("mainFindUs"));
observerLeft.observe(document.getElementById("rezhim"));
observerRight.observe(document.getElementById("mainRezhim"));

/*----------------------меню бургер----------------------------*/

const menuWork = () => {
	let count = false;
	let burgerCase = document.getElementsByClassName("burgerCase")[0];
	let upperLine = document.getElementById("upperLine");
	let middleLine = document.getElementById("middleLine");
	let bottomLine = document.getElementById("bottomLine");
	let menuBody = document.getElementById("menuBody");

	burgerCase.addEventListener("click", () => {
		if (count == false) {
			count = true;
			upperLine.style.cssText = "transform:rotate(45deg); top:27px; left:4px; transition:0.3s;";
			middleLine.style.cssText = "opacity:0; transition:0.3s;";
			bottomLine.style.cssText = "transform:rotate(-45deg); top:27px; left:4px; transition:0.3s;";
			menuBody.style.cssText = "transform:scalex(100%);transition:0.3s;";
			
		} else {
			count = false;
			upperLine.style.cssText = "transform:rotate(0deg); top:10px; left:3px; transition:0.3s;";
			middleLine.style.cssText = "opacity:1; transition:0.3s;";
			bottomLine.style.cssText = "transform:rotate(0deg); top:46px; left:3px; transition:0.3s;";
			menuBody.style.cssText = "height:fit-content;transform:scalex(0%); transition:0.3s;";
		}
	});
}
