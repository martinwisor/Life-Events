const yourName = "Martin Wisor";
const age = 43;
const birthday = "September 25";
const pineapplePizza = true;
const lifeEvents = [
  "I was born in Davenport, IA.",
  "I lived in Washington, DC.",
  "I love swimming.",
  "My girlfriend and I have a son.",
];
if (true) {
  console.log(
    `My name is ${yourName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  `My name is ${yourName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`;
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    console.log(counter);
    console.log(`${randomNumber} !==5!`);
    counter++;
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
