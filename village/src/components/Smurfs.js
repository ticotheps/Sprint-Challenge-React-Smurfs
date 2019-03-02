import React from 'react';
import Smurf from './Smurf';

const Smurfs = (props) => {
    return (
      <div className="smurfs-container">
        <h1 className="smurfs-header">Welcome to Smurf Village!</h1>
        <ul className="smurfs-cards-container">
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                imageUrl={smurf.imageUrl}
                key={smurf.id}
                smurf={smurf}
                deleteSmurf={props.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
};

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
