console.log("its working");
// const button = $('button')
$('#setName').on('click', (event) => {
	pet.setName($('input').val());
	window.alert('Welcome ' + pet.petName);

// agePet()
lifePet()
updateList()
})

class Tamagotchi {
	constructor(petName){
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 1;
		this.petName = petName;
		this.isAlive = true;
	}
	feed() {
		return this.hunger--
	}
	sleep() {
		return this.sleepiness--
	}
	play() {
		return this.boredom--
	}
	life() {
		return this.age++
	}
	setName(newName) {
		return this.petName = newName
	}
	killPet() {
		return this.isAlive = false
	}
}

const pet = new Tamagotchi('irwin');

// console.log(irwin);

// $('button').on('click', (e) => {
// 	const action = $(e.currentTarget).text();
// 	console.log(action);
// })

$('#food').on('click', () => {
	pet.feed()
	console.log(pet.hunger);
})

$('#light').on('click', () => {
	pet.sleep()
	console.log(pet.sleepiness);
})

$('#play').on('click', () => {
	pet.play()
	console.log(pet.boredom);
})

// $('#setName').on('click', (event) => {
// 	pet.setName($('input').val());
// 	window.alert('Welcome ' + pet.petName);
// })

// agePet()

function lifePet () { 
	setInterval(function(){ 
		// $('#hunger').text('Hunger: ' + pet.hunger);
		// $('#sleepiness').text('Sleepines: ' + pet.sleepiness);
		// $('#boredom').text('Boredom: ' + pet.boredom)
		if (pet.isAlive) {
			pet.hunger++
			pet.sleepiness++
			pet.boredom++
			pet.age++

		if (pet.hunger >= 10 || pet.boredom >= 10 || pet.sleepiness >= 10) {
			pet.killPet()	
		}
		updateList()	
		}
	}, 5000);
}

// lifePet()


function updateList() {
		$('#hunger').text('Hunger: ' + pet.hunger);
		$('#sleepiness').text('Sleepines: ' + pet.sleepiness);
		$('#boredom').text('Boredom: ' + pet.boredom);
		$('#age').text('Age: ' + pet.age);
}





