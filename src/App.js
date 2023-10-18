import {Animal} from './Animals';
import React, {useState} from 'react';

const AnimalPrimaryComponent = () => {
  const animals = [
    { name: 'Lion', isMammal: true },
    { name: 'Snake', isMammal: false },
    { name: 'Dolphin', isMammal: true },
    { name: 'Crocodile', isMammal: false },
    { name: 'Elephant', isMammal: true },
    { name: 'Shark', isMammal: false },
    { name: 'Gorilla', isMammal: true },
    { name: 'Parrot', isMammal: false },
    { name: 'Kangaroo', isMammal: true },
    { name: 'Tiger', isMammal: true },
    { name: 'Penguin', isMammal: false },
    { name: 'Hippopotamus', isMammal: true },
  ];

  return (
    <div>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          isMammal={animal.isMammal}
        />
      ))}
    </div>
  )
}

export default AnimalPrimaryComponent;
