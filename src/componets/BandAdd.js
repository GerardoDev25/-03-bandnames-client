import React, { useState } from 'react';

const BandAdd = ({ crearBanda }) => {
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valor.trim()) crearBanda(valor);
    setValor('');
  };

  const handleChange = ({ target }) => {
    setValor(target.value);
  };

  return (
    <>
      <h4>Agregar Banda</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="nuevo nombre de banda"
          value={valor}
          onChange={handleChange}
          name="name"
        />
      </form>
    </>
  );
};

export default BandAdd;
