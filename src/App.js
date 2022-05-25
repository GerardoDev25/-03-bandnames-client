import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import BandAdd from './componets/BandAdd';
import BandList from './componets/BandList';

const connectsocketServer = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket'],
  });
  return socket;
};

const App = () => {
  const [socket] = useState(connectsocketServer());
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true);
    });
    return () => socket.disconnect();
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands);
    });
  }, [socket]);

  const votar = (id) => {
    socket.emit('votar-banda', id);
  };

  const borrar = (id) => {
    socket.emit('borrar-banda', id);
  };

  const cambiarNombre = (id, nombre) => {
    socket.emit('cambiar-nombre', { id, name: nombre });
  };

  const crearBanda = (nombre) => {
    socket.emit('agregar-banda', nombre);
  };

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? <span className="text-success">online</span> : <span className="text-danger">offline</span>}
        </p>
      </div>

      <h3>Band Names</h3>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandList data={bands} votar={votar} borrar={borrar} cambiarNombre={cambiarNombre} />
        </div>
        <div className="col-4">
          <BandAdd crearBanda={crearBanda} />
        </div>
      </div>
    </div>
  );
};

export default App;
