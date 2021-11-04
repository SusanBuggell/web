function favColor(evt) {
	evt.preventDefault();
	// evt.target.onclick;
	// console.log('form submit');
	alert("Whoa, wait a minute.....I can only pick one? How about all of them? Yes, all the colors!");
}
function favPlace(evt) {
    evt.preventDefault();
    // evt.target.onclick;
    // console.log('form submit');
    alert("Hmmmm, my favorite place....Let me think, Venizia, Italia!");
}
function favRitual(evt) {
    evt.preventDefault();
    // evt.target.onclick;
    // console.log('form submit');
    alert("Rituals....rituals....maybe having a wonderfully done pedicure.");
}
let btnFavColor = document.querySelector("button#color");
console.log(`btnFavColor: ${btnFavColor}`)
btnFavColor.addEventListener("click", favColor);
let btnFavPlace = document.querySelector("button#place");
console.log(`btnFavPlace: ${btnFavPlace}`)
btnFavPlace.addEventListener("click", favPlace);
let btnFavRitual = document.querySelector("button#ritual");
console.log(`btnFavRitual: ${btnFavRitual}`)
btnFavRitual.addEventListener("click", favRitual);
 