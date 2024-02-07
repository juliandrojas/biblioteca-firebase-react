import React from 'react';
import Navbar from '../components/Navbar';

function Index() {
  const navbarProps = {
    brandName: 'Index',
    links: [
      { label: 'Inicio', href: '/', active: true },
      { label: 'Catálogo', href: '#' },
      { label: 'Ofertas', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Ingresar', href: '/login' },
      { label: 'Disabled', disabled: true },
    ],
  };

  

  return (
    <>
      <Navbar {...navbarProps} />
    </>
  );
  
}

export default Index;
