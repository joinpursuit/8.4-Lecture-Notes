// What are the five most common primitive types?

// What other two data types are primitive types but are less commonly used?

// Anything that is not a primitive type is a reference type. What data types have you already worked with in this class that is a reference type?

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // let myHobby = "reading";
    // let yourHobby = myHobby;
    // myHobby = "playing video games";

    // console.log(myHobby, yourHobby);

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // let myHobbies = ["reading"];
    // let yourHobbies = myHobbies;
    // myHobbies[0] = "playing video games";

    // console.log(myHobbies, yourHobbies);

// What does it mean for a data type to be a reference type?

// Will the code below throw an error? Why or why not?

    // const hobbies = ["reading", "playing video games"];
    // hobbies[hobbies.length] = "biking";

// Why does the code below log false?

    // console.log({ hobbies: ["reading"] } === {});

// Why does the code below log false?

    // console.log({ hobbies: ["reading"] } === { hobbies: ["reading"] });

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // const myHobbies = ["reading", "playing video games"];
    // const yourHobbies = myHobbies;
    // myHobbies.push("biking");

    // console.log(myHobbies, yourHobbies);

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // const videoGames = {
    // description: "playing video games",
    // };
    // const reading = videoGames;
    // reading.description = "reading";

    // console.log(videoGames, reading);

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // const louie = {
    // name: "Louie James",
    // hobbies: ["reading", "playing video games", "biking"],
    // };
    // const jody = {
    // name: "Jody Hawkins",
    // hobbies: louie.hobbies,
    // };

    // console.log(louie === jody);

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // const louie = {
    // name: "Louie James",
    // hobbies: ["reading", "playing video games", "biking"],
    // };
    // const jody = {
    // name: "Jody Hawkins",
    // hobbies: louie.hobbies,
    // };

    // console.log(louie.hobbies === jody.hobbies);

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // const louie = {
    // name: "Louie James",
    // hobbies: ["reading", "playing video games", "biking"],
    // };
    // const jody = {
    // name: "Jody Hawkins",
    // hobbies: louie.hobbies,
    // };

    // louie.hobbies.pop();
    // console.log(louie.hobbies, jody.hobbies);

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // const louie = {
    // name: "Louie James",
    // hobbies: ["reading", "playing video games", "biking"],
    // };
    // const jody = {
    // name: "Jody Hawkins",
    // hobbies: louie.hobbies.slice(0, 2),
    // };

    // console.log(louie.hobbies === jody.hobbies);

// Mentally evaluate the following code. What do you expect will be logged? Why?

    // const louie = {
    // name: "Louie James",
    // hobbies: ["reading", "playing video games", "biking"],
    // };
    // const jody = {
    // name: "Jody Hawkins",
    // hobbies: louie.hobbies.slice(0, 2).concat("coding", "painting"),
    // };

    // console.log(jody.hobbies);