console.log('creation')

$('button').on('click', (event) => {
	console.log('hey')
	const feed = $('input').val();
	shadow.feedMe(feed);
})


$('button').on('click', (event) => {
	console.log('hey')
	const feed = $('input').val();

})

$('button').on('click', (event) => {
	console.log('hey')
	const playWithMe = $('input').val();
	shadow.play(playWithMe);

})



class Tomagachi {
	constructor(hunger, sleepiness, boredom, age){
		this.hunger = hunger;	
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
			
	}
	jump(){
		console.log('I can jump')
	}
	feedMe(){
		console.log('I am hungry')

	}
	play(action){
		console.log('play with me')
	}
	

}
//console.log(Tomagachi)
const shadow = new Tomagachi(5, 3, 1, 7)
// add the value for hunger to the Hunger h1 in the html using jQuery
	// grab the correct html element w/ jq
const hunger = $('#hunger')
hunger.text(shadow.hunger)
// if(hunger = 5)
// add the value for sleepiness to the sleepiness h1 in the html using jQuery
const sleepiness = $('#sleepiness')
console.log(shadow.sleepiness, ' this is sleepy')
sleepiness.text(shadow.sleepiness)
// add the value for age to the age h1 in the html using jQuery
const age = $('#age')
age.text(shadow.age)


// add the value for boredom to the boredom h1 in the html using jQuery
const boredom = $('#boredom')
boredom.text(shadow.boredom)
console.log(shadow)
	
