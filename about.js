console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault()
	// evt.target.onSubmit;
	// console.log('form submit');
	alert("Your responses have been been submitted successfully.");
}

// const compList = document.querySelectorAll(".li-compliments")
// console.log(`compList: ${compList}`)
// console.log(`compListRNG: ${compList[parseInt(Math.floor(Math.random() * (compList.length -1)))]}`)


function handleMouseover(evt) {
	evt.preventDefault();
	// evt.target.onMouseOver;
	// alert(compList[parseInt(Math.floor(Math.random() * (compList.length -1)))])
	const addCompliments =["You are an avid easter egg hunter!","You have an eye for digital ducks!","I know we are going to be best friends!"]
	let complimentRNG = addCompliments[Math.floor(Math.random() * (addCompliments.length))];
	// console.log(`compliment: ${complimentRNG}`)
	alert (complimentRNG);
}


let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);
let matrixImg = document.querySelector('#matrix-duck')
// console.log(`matrixImg: ${matrixImg}`)
matrixImg.addEventListener('mouseover', handleMouseover);
