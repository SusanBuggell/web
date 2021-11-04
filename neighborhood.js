function recommendRest(evt) {
	evt.preventDefault();
	// evt.target.onMouseOver;

	const restaurants =[
        {Name: "Blue Nile",
        Address: "545 W. Nine Mile Road Ferndale, Mi 48220",
        Phone: "(248) 547-6699"
        },
        {Name: "Pi's Thai",
        Address: "24940 John R. Road Hazel Park, MI 48030",
        Phone: "(248) 545-4070"
        },
        {Name: "Ardiana's Restaurant",
        Address: " 41602 W 10 Mile Road Novi, MI 48375",
        Phone: " (248) 349-2470"
        }
    ]
    let restRNG = parseInt(Math.floor(Math.random() * (restaurants.length)))
    let randomRest = restaurants[restRNG];
   

      
    document.getElementById("restRNG-name").innerHTML = randomRest.Name
    document.getElementById("restRNG-address").innerHTML = randomRest.Address
    document.getElementById("restRNG-phone").innerHTML = randomRest.Phone
}
let recRest = document.querySelector('#rec-rest')
// console.log(`matrixImg: ${matrixImg}`)
recRest.addEventListener('click', recommendRest);