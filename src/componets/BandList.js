import React from 'react';

const BandList = () => {
  const createRows = () => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary">+1</button>
        </td>
        <td>
          <input type="text" className="from-control" />
        </td>
        <td>
          <h3>15</h3>
        </td>
        <td>
          <button className="btn btn-danger">Borrar</button>
        </td>
      </tr>
    );
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
