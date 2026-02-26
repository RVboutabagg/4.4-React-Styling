import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Food from "./Components/Food";

function App() {

  const yourName = "Rolo";

  const currentYear = 2026;


  return (

    <div>

      <h1>Hello, React!</h1>

      <h2>My name is Rolo</h2>

      <p>I’m learning React in 2026.</p>

      <p>This is my first React component!</p>
      <h2>3 things I am excited to build on React is:</h2>
      <ol>
        <li>Website</li>
        <li>Apps</li>
        <li>Frameworks</li>
      </ol>
      <p id="color-black"></p>
      <p>My favorite color is black</p>
      <img src="bleach+2.jpg" alt="bleach"/>

    </div>

  );

}

export default App;
