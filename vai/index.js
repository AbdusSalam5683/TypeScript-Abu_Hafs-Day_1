const friends = ['Zara', 'Bob', 'Anna', 'Chris'];

// Output:[ 'Anna', 'Bob', 'Chris', 'Zara' ]

const shortFriends = friends .sort();



console.log(shortFriends);

// problem 2

const movies = ['Jaws', 'Rocky', 'Alien', 'Avatar', 'Coco', 'Up', 'It']

const firstGroup = movies.slice(2, 5);
console.log(firstGroup);

const secoundGroup =movies.slice(0, 2).concat(movies.slice(5));
console.log(secoundGroup);


Output: 
['Alien', 'Avatar', 'Coco']
['Jaws', 'Rocky', 'Up', 'It']

// problem 3
const numbers = [4, 5, 2, 8, 10];



Output: [8, 10, 4, 16, 20]