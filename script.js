// Deel A Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.
// const superheroes = [
// 	{name: "Batman", alter_ego: "Bruce Wayne"}, 
// 	{name: "Superman", alter_ego: "Clark Kent"}, 
// 	{name: "Spiderman", alter_ego: "Peter Parker"}]

// const findSpiderMan = items => items.find(lookFor => lookFor.name === "Spiderman");

// console.log(findSpiderMan(superheroes));


// Deel B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. 
// Gebruik de .forEach method of, een level hoger: de .map method.
// const doubleArrayValues = element => console.log(element.map(item => item * 2));

// doubleArrayValues([1, 2, 3]);
// result should be [2, 4, 6]


// Deel C Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.
// const containsNumberBiggerThan10 = element => console.log(element.some(item => item > 10));

// containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// result should be true
// containsNumberBiggerThan10([1,2,1,2,1,2])
// result should be false


// Deel D Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.
// const isItalyInTheGreat7 = element => console.log(element.includes("Italy"));

// isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']); 
// result should be true


// Deel E Schrijf een JavaScript functie die elke integer vertienvoudigt. Gebruik .forEach.
// const tenfold = element => {
// 	const result = [];
// 	element.forEach((item, index, arr) => result.push(arr[index] = item * 10));
// 	return result;
// }

// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]


// Deel F Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.
// const isBelow100 = element => element.every(item => item < 100);

// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false


// Deel G Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. 
// Gebruik de .reduce method.
// const bigSum = element => element.reduce(((value, item) => item + value), 0);

// console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118 
