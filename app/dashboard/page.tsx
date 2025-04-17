'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const ahora = new Date().toLocaleString();
    setFecha(ahora);
  }, []); // <- Esto hace que se ejecute solo una vez

  return (
    <div>
      <h1>Dashboard</h1>
      <p>La fecha y hora actual es: {fecha}</p>
    </div>
  );
}
