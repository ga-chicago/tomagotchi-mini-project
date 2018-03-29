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
	shadow.name = changeName;

})

class Tomagachi {
	constructor(hunger, sleepiness, boredom, age){
		this.hunger = hunger;	
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		
			
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
		if(this.hunger > 0) {
			this.hunger--
		}
		// increase sleepiness
		if(this.sleepiness < 10){
			this.sleepiness++	
		}
		
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
	
	

}
//console.log(Tomagachi)
const shadow = new Tomagachi(5, 3, 1, 7)
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
    
    if(time === 10){
    	shadow.age++
    	printInfo();
    }

    // $('#timer').text('timer: ' + time + 's');

  }, 1000);

};


printInfo();
setTimer();

// for(let i = 0; i < 100; i++) {
// 	// if the remainder when you divide i by 2 is 0
// 	if(i % 2 == 0) { // (even)
// 		console.log(i)
// 	}
// }


























