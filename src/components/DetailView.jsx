import React from 'react';
import { useParams } from 'react-router-dom';

const DetailView = () => {
  const { id } = useParams();

  const itemDetails = {
    1: {
      name: 'Apollo 11',
      description: 'First successful manned moon landing in 1969.',
    },
    2: {
      name: 'Voyager 1',
      description: 'Launched in 1977, now the farthest human-made object from Earth.',
    },
    3: {
      name: 'James Webb Telescope',
      description: 'Observing the early universe from L2 orbit.',
    },
  };

  const item = itemDetails[id];

  return (
    <div>
      <h1>{item?.name || 'Item Not Found'}</h1>
      <p>{item?.description || 'No description available.'}</p>
    </div>
  );
};

export default DetailView;
