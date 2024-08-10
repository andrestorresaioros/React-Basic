import './App.css';
import Heading from "./Heading"
import Card from "./Card";
function Header() {
  return <h1>Hola mundo</h1>;
}
function App() {
  return (
    <div className="App">
              <Header/>
              <Heading firstName="Empleo" />
              <Heading firstName="Andrés"/>
              <h1>Task: Add three Card elements</h1>
              <Card h2="First card's h2" h3="First card's h3" />
              <Card h2="Second card's h2" h3="Second card's h3" />
              <Card h2="Third card's h2" h3="Third card's h3" />
          </div>
  );
};

export default App;
