const people = require('./encodedData');

function getPersonInQueue(position) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = Buffer.from(people, 'base64').toString('utf-8').split(",");
      const person = list[position - 1];
      if (person) {
        resolve(person)
      } else {
        reject(`Position value of ${position} did not return a person.`);
      }
    }, 100 * (Math.random() * 5));
  });
}

module.exports = getPersonInQueue;
