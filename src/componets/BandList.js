import React, { useEffect, useState } from 'react';

const BandList = ({ data, votar, borrar, cambiarNombre }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data, setBands]);

  const handleChange = ({ target }, id) => {
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) band.name = target.value;
        return band;
      })
    );
  };

  const onLuseFocus = (id, name) => {
    console.log({ id, name });
    cambiarNombre(id, name);
  };

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button className="btn btn-primary" onClick={() => votar(band.id)}>
            +1
          </button>
        </td>
        <td>
          <input
            type="text"
            className="from-control"
            value={band.name}
            onChange={(e) => handleChange(e, band.id)}
            onBlur={() => onLuseFocus(band.id, band.name)}
          />
        </td>
        <td>
          <h3>{band.votos}</h3>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => borrar(band.id)}>
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>nombre</th>
            <th>votos</th>
            <th>borrar</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
