import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import DynamicForm from '../components/Forms/DynamicForm';
import Navbar from '../components/Navbar';


function Login() {
  const navbarProps = {
    brandName: 'Index',
    links: [
      { label: 'Inicio', href: '/', active: true },
      { label: 'Productos', href: '#' },
      { label: 'Ofertas', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Ingresar', href: '/login' },
      { label: 'Disabled', disabled: true },
    ],
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    checkboxValue: false,
  });

  const handleChange = (fieldId, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldId]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, checkboxValue } = formData;
  
    // Validar campos obligatorios
    if (!name || !email || !password) {
      alert("Campos obligatorios");
      console.error('Error: Campos obligatorios vacíos');
    } else {
      console.log('Formulario enviado:', formData);
      // Lógica para manejar el envío del formulario
      const auth = getAuth();
      try {
        // Crear el usuario con el correo y la contraseña
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Usuario creado:', user)
      } catch (error) {
        console.error("Error al crear el usuario: "+error.message);
      }
      
    }
  };
  
  const fields = [
    {
      type: 'text',
      label: 'Nombre:',
      id: 'name',
      placeholder: 'Ingrese tu nombre: ',
      value: formData.name,
      onChange: (e) => handleChange('name', e.target.value),
    },
    {
      type: 'email',
      label: 'Correo:',
      id: 'email',
      placeholder: 'Ingrese tu correo: ',
      value: formData.email,
      onChange: (e) => handleChange('email', e.target.value),
    },
    {
      type: 'password',
      label: 'Contraseña:',
      id: 'password',
      placeholder: 'Ingrese tu contraseña: ',
      value: formData.password,
      onChange: (e) => handleChange('password', e.target.value),
    },
    /*{
      type: 'checkbox',
      label: 'Checkbox:',
      id: 'checkboxValue',
      checked: formData.checkboxValue,
      onChange: (e) => handleChange('checkboxValue', e.target.checked),
    },*/
  ];

  return (
    <>
      <Navbar {...navbarProps} />
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="card">
          <div className="card-body">
            <DynamicForm fields={fields} onSubmit={handleSubmit} buttonLabel={"Hola Mundo"} />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Login;
