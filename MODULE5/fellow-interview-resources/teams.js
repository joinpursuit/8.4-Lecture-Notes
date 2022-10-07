/* 
  8.4!  THIS FILE CONTAINS OUR TWO TEAMS FOR OUR FELLOW TO FELLOW MOCK INTERVIEWS

    Starting on Sunday 10/9 we will be dedicating some of our time to interviewing one another 
    during our lab time!
    
    You have all been invited to join either "This Team" or "That Team" on Github.  
    Each team will have access to a different repository of interview questions selected 
    by our curriculum team. 
    
    Moving forward if you are on This Team you will be partnered with someone from That Team for each of our 
    remaining labs as we move towards the Data Structures portion of Module 5.
    
    Once you and your parnter have completed your labs you will have the opporunity to interview each other
    with one of the problems of your choice from your teams repository.

    Our teams are here:

    
    This Team: ['Thierry', 'Sabrina', 'Soma', 'Christine', 'Jede', 'Tom', 'Victor', 'Samantha', 'Kenyetta', 'Ziqian', 'Zane', 'Dan', 'Metza']

    That Team: ['Luke', 'Adnan', 'Jorge', 'Jamal', 'Mason', 'Olayinka', 'T.K', 'Jimmy', 'John', 'Spencer', 'Kalilah', 'Khaleed']



    BELOW is how we shuffled the groups.  
    See if you can follow the logic!
*/

const fellows = [
  "Adnan",
  "Ametzayin",
  "Christine",
  "Dan",
  "Jamal",
  "Jimmy",
  "John",
  "Jorge",
  "Kalilah",
  "Khaleed",
  "Luke",
  "Mason",
  "Olayinka",
  "Sabrina",
  "Samantha",
  "Soma",
  "Spencer",
  "T.K",
  "Jede",
  "Thierry",
  "Tom",
  "Victor",
  "Zane",
  "Ziqian",
  "Kenyetta",
];

// our shuffle method
const shuffle = (array) => {
  let thisTeam = [];
  let thatTeam = [];
  let m = array.length;
  let i = 0;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    [array[m], array[i]] = [array[i], array[m]];
  }
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) thisTeam.push(array[i]);
    else thatTeam.push(array[i]);
  }
  // lowercased half the teams to make sure we get a solid mix from both arrays
  thisTeam = thisTeam.map((name) => name.toLowerCase());
  return { thisTeam, thatTeam };
};
// get daily pairs

const getPairs = (first, second) => {
  let m = first.length > second.length ? first.length : second.length;
  let i = 0;
  let pairs = [];

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining elemen - multiply THEN decrement
    i = Math.floor(Math.random() * m--);
    let pair = [];
    pair.push(first.splice(i, 1) || first.pop());
    pair.push(second.splice(i, 1) || second.pop());
    pairs.push(pair.flat());
  }
  return pairs;
};

let { thisTeam, thatTeam } = shuffle(fellows);
// this fucntion will get our daily pairs every time it is invoked
let pairs = getPairs(thisTeam, thatTeam);

