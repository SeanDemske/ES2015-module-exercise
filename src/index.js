import foods from "./foods";
import { choice, remove } from "./helpers";

let randomFruit = choice(foods);
console.log(`I'd like one ${randomFruit} please`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious, May I have another");
console.log(`I'm sorry, we're all out. We have ${remove(randomFruit, foods)} left`);