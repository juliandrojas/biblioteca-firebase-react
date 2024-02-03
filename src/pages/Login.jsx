import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {
  const navbarProps = {
    brandName: "Index",
    links: [
      { label: "Inicio", href: "/", active: true },
      { label: "Productos", href: "#" },
      { label: "Ofertas", href: "#" },
      { label: "Contacto", href: "#" },
      { label: "Ingresar", href: "/login" },
      { label: "Disabled", disabled: true },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
      console.error("Error: Campos obligatorios vacíos");
    } else {
      console.log("Formulario enviado:", formData);
      // Lógica para manejar el envío del formulario
      const auth = getAuth();
      try {
        // Crear el usuario con el correo y la contraseña
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("Usuario creado:", user);
      } catch (error) {
        console.error("Error al crear el usuario: " + error.message);
      }
    }
  };

  const fields = [
    {
      type: "text",
      label: "Nombre:",
      id: "name",
      placeholder: "Ingrese tu nombre: ",
      value: formData.name,
      onChange: (e) => handleChange("name", e.target.value),
    },
    {
      type: "email",
      label: "Correo:",
      id: "email",
      placeholder: "Ingrese tu correo: ",
      value: formData.email,
      onChange: (e) => handleChange("email", e.target.value),
    },
    {
      type: "password",
      label: "Contraseña:",
      id: "password",
      placeholder: "Ingrese tu contraseña: ",
      value: formData.password,
      onChange: (e) => handleChange("password", e.target.value),
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
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                {/* <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label> */}
              </div>
              <div className="row">
                <div className="col">
                  <a href="/register" className="btn btn-primary w-100">
                    Registrate
                  </a>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-secondary w-100">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
