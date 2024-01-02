import React from 'react';
import Beer from './Beer';

interface BeerListProps {
    beers: string[];
    onAddBeer: (beer: string) => void;
    onRemoveBeer: (index: number) => void;
}

const BeerList: React.FC<BeerListProps> = ({ beers, onAddBeer, onRemoveBeer }) => {
    const handleAddBeer = () => {
        const newBeer = prompt('Enter the name of the beer:');
        if (newBeer) {
            onAddBeer(newBeer);
        }
    };

    return (
        <div>
            <h2>Beer List</h2>
            <ul>
                {beers.map((beer, index) => (
                    <Beer key={index} name={beer} onRemove={() => onRemoveBeer(index)} />
                ))}
            </ul>
            <button onClick={handleAddBeer}>Add Beer</button>
        </div>
    );
};

export default BeerList;
