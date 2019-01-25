import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf smurf-char">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

      <button onClick={() => props.delete(props.id)}>Remove Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

