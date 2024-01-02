import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BeerList from './BeerList';
import About from './About';

const App: React.FC = () => {
  const initialBeers:string[] = [];
  const [beerList, setBeerList] = React.useState<string[]>(initialBeers);

  const handleAddBeer = (beer: string) => {
    setBeerList([...beerList, beer]);
  };

  const handleRemoveBeer = (index: number) => {
    const updatedList = [...beerList];
    updatedList.splice(index, 1);
    setBeerList(updatedList);
  };

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<BeerList beers={beerList} onAddBeer={handleAddBeer} onRemoveBeer={handleRemoveBeer} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;