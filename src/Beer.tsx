import React from 'react';

interface BeerProps {
    name: string;
    onRemove: () => void;
}

const Beer: React.FC<BeerProps> = ({ name, onRemove }) => {
    return (
        <li>
            {name}
            <button onClick={onRemove}>Remove</button>
        </li>
    );
};

export default Beer;
