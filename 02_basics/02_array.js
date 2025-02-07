const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);-----------------------------two arrya merge in one arrya

//VIMP 
//Spride--------mostly use in to merge tow arrya in sinle arrya format
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//Arrya In arrya 
//Flot(infinity) ----------Use this convert in single arrya format
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting------its give the error

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));