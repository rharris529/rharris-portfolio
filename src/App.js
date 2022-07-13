import React, {useState} from 'react';
import Nav from './components/Nav'
import About from './components/About';
import './App.css';

function App() {

  const [categories] = useState([
    {
      name: "About Me"
    },
    {
      name: "Projects"
    },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className='App'>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
