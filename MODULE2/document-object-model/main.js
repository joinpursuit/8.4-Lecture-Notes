
let response = window.prompt("What is your name?")

alert(`Hello ${response}! `);

downcasedResponse = response.toLowerCase();

// sessionStorage.clear();
// localStorage.clear();

// setInterval(async () => {
//     let message = sessionStorage.getItem('message') || "Is this annoying yet?"
//     let count = localStorage.getItem('count') || 1

//     if (count % 10 === 0) {
//         alert("Seriously... you're not tired of this yet? I can keep going...");
//     } else if (count % 5 === 0) {
//         alert(`Send payment to gigi@pursuit.org\n${"🤑💵💸💶🤑💷💸💴🤑💳💸💰".repeat(3)}`)
//     } else {
//         message = message.split(" ").map(word => {
//             return word === "annoying" ? "really " + word : word
//         }).join(" ");
//         await sessionStorage.setItem('message', message)
//         alert(message);
//     }
//     await localStorage.setItem('count', (Number(count) + 1).toString())
// }, 2000);