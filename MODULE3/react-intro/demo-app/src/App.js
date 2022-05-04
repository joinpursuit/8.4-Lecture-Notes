import logo from "./logo.svg";
import "./App.css";
import ContactList from "./components/ContactList";
import Feed from "./components/Feed";
import Post from "./components/Post"
// import { names, names2 } from "./exports/named"
// import nums from "./exports/default"

// console.log(names2)
// console.log(nums)
const currentUser = {
  firstName: "Tim",
  lastName: "McKiernan",
};
const formatUser = (taco) => {
  return taco.firstName + " " + taco.lastName;
};
const el = <h1>Hello from valid JS</h1>;

function App() {
  return (
    <div className="App">
      <h1> { formatUser(currentUser) } </h1>
      { el }
      <ContactList></ContactList>
      <Feed />
    </div>
  );
}

export default App;
