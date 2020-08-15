const dogAge=prompt('Please enter your dog age: ');
const dogName=prompt('What\'s the name of your dog? ');

let earlyStage=2;
let lateStage=dogAge-earlyStage;

earlyStage=earlyStage*10.5;
lateStage=lateStage*4;

dogAgeInHumanYears=earlyStage+lateStage;
console.log(dogName + ' is ' + dogAgeInHumanYears + ' years old in human years.');