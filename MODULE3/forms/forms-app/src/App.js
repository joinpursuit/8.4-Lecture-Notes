
import Form from './components/Form';
import ClassForm from './components/ClassForm';
import './App.css';

function App() {
  // can we set state here that is updated on our Form component on submit
  return (
    <div className="App">
       <h1>Welcome to Forms country.</h1>
       <Form />
       <ClassForm />
    </div>
  );
}

export default App;
