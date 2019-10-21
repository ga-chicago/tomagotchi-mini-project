console.log('creation')
let timer;
let time = 0;
// let newAge = 3;

$('#food').on('click', (event) => {
	console.log('hey')
	const feed = $('input').val();
	shadow.feedMe(feed);

})



$('#light').on('click', (event) => {
	console.log('boo')
	const lights = $('input').val();
	shadow.sleep(lights);

})

$('#play').on('click', (event) => {
	console.log('ball')
	const playWithMe = $('input').val();
	shadow.play(playWithMe);

})

$('#name').on('click', (event) => {
	console.log('hola')
	const changeName = $('input').val();
	// since you need the name 
	$('#display').text(changeName)
	// this is the place I want to you to instatiate your class
	shadow.name = changeName;

})

class Tomagachi {
	constructor(hunger, sleepiness, boredom, age, name){
		this.hunger = hunger;	
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		this.name = name;
			
	}
	sleep(){
		if(this.sleepiness > 0){
		this.sleepiness--
		}
		if(this.boredom >= 10){
		 	this.boredom--
		 }

		 printInfo();
		 
		 	
	}
	feedMe(){
		// reduce hunger
		if(this.hunger < 10) {
			this.hunger--
		}
		// increase sleepiness
		if(this.sleepiness < 10){
			this.sleepiness++	
		}
		if(this.boredom < 10){
		 	this.boredom++
		 }
		// if (this.sleepiness > 10) {
		// 	//do die code
		// 	this.die();
		// }
		console.log("I am very hungry")
		printInfo();

	}
	play(action){
		
		if(this.hunger < 10) {
			this.hunger++
		}
		 if(this.sleepiness < 10){
		 	this.sleepiness++
		 }
		 printInfo();

		console.log('play with me')
	}
	// newAge(){
	// 	if(this.age === 15)
	// 		this.die();
	// 	console.log('Good Bye')
	// }
	die(){
		
		if(this.hunger < 10)
			this.hunger--

	}

	
	

}
//console.log(Tomagachi)
const shadow = new Tomagachi(5, 3, 1, 7, 'this is where the input value of the name would go')
console.log(shadow);


const printInfo = () => {
	// add the value for hunger to the Hunger h1 in the html using jQuery
	// grab the correct html element w/ jq
	const hunger = $('#hunger')
	hunger.text('hunger: ' + shadow.hunger)
	// if(hunger = 5)
	// add the value for sleepiness to the sleepiness h1 in the html using jQuery
	const sleepiness = $('#sleepiness')
	console.log(shadow.sleepiness, ' this is sleepy ')
	sleepiness.text('sleepiness: ' + shadow.sleepiness)
	// add the value for age to the age h1 in the html using jQuery
	const age = $('#age')
	age.text('age: ' + shadow.age)


	// add the value for boredom to the boredom h1 in the html using jQuery
	const boredom = $('#boredom')
	boredom.text('boredom: ' + shadow.boredom)

	console.log(shadow)
}




    //   clearInterval(timer)

const setTimer = () => {
	
  timer = setInterval(() => {
    time++
    console.log( time + ' timer is running')
    
    //   shadow.age++;
    
    if(time === 10 || 12){
    	shadow.age++
    	printInfo();
    }
    if(time === 20){
    	clearInterval(timer)
    }
    
  }, 1000);

};


printInfo();
setTimer();

// use a jquery selector to grab image then use the animate $('#squirall').animate
const moveright = () =>{
	// .animate, you can change marging an animate
	$('#image').animate({
		"margin-left": "260px"})
}

$('#image').on('click', (e) => {
	console.log('hey')
	const moving = $('input').val();
	moveright();
	$(e.currentTarget).off('click')
	$('#image').on('click', (event) => {
	console.log('hey')
// 	const moving = $('input').val();
	moveback();
})


})

const moveback = () =>{
	$('#image').animate({"margin-left": "0px"})
	// $(e.currentTarget).off('click').on('click', (e) =>
}
























