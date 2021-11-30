//Maps: Challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2020 - "Parasite";
// 2019 - "Green Book";
// 2018 - "The Shape of Water";
// 2017 - "Moonlight";
// 2016 - "Spotlight";
// 2015 - "Birdman";
// 2014 - "12 Years a Slave";
// 2013 - "Argo";

//1. Create a new Map with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.
const bestMovies = new Map();
bestMovies.set(2020, "Parasite");
bestMovies.set(2019, "Green Book");
bestMovies.set(2018, "The Shape of Water");
bestMovies.set(2017, "Moonlight");
bestMovies.set(2016, "Spotlight");
bestMovies.set(2015, "Birdman");
bestMovies.set(2014, "12 Years a Slave");
bestMovies.set(2013, "Argo");

console.log(bestMovies);

//2. What film won best picture in 2015?
const bestMovie2015 = bestMovies.get(2015);
console.log(bestMovie2015);
// or
// bestMovies.forEach((value, key) => {
//   if (key === 2015) {
//     console.log(`${value} won best picture in 2015.`);
//   }
// });

//3. Does this list contain Best Picture from 2010? 2018?
const movieRange = bestMovies.has(2010);
const movieRange2 = bestMovies.has(2018);
console.log(movieRange, movieRange2);

//4. How many films are included in this list?
const movieSize = bestMovies.size;
console.log(movieSize);

//5. What is the second key in this movies Map?
const movieKeys = bestMovies.keys();
movieKeys.next();
const secondKey = movieKeys.next().value;
console.log(secondKey);

//6. What is the third value in this movies Map?
const movieValues = bestMovies.values();
movieValues.next();
movieValues.next();
const thirdValue = movieValues.next().value;
console.log(thirdValue);

//7. What is the first set of entries in this movies Map?
const movieEntries = bestMovies.entries();
const firstEntry = movieEntries.next().value;
console.log(firstEntry);

//8. Loop over the map, and if the movie won Best Picture before 2017,
//log it in the console. Include the year and the movie.
bestMovies.forEach((value, key) => {
  if (key < 2017) {
    console.log(`${key}: ${value}`);
  }
});

//9. Delete the Best Picture from 2013 from your movies Map.
bestMovies.delete(2013);
console.log(bestMovies);

//10. Clear your movies Map.
bestMovies.clear();
console.log(bestMovies);
