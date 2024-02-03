import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase/firebase.js";

function Register() {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validar campos obligatorios
    if (!email || !password) {
      alert("Campos obligatorios");
      console.error("Error: Campos obligatorios vacíos");
    } else {
      console.log(`Formulario enviado: Email ${email}, password: ${password}`);
      // Lógica para manejar el envío del formulario
      try {
        // Utiliza la instancia de autenticación `auth` para crear un usuario con correo y contraseña
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Obtén el usuario creado
        const user = userCredential.user;

        // Accede al token de acceso desde stsTokenManager
        const accessToken = user?.stsTokenManager?.accessToken;

        // Aquí puedes agregar lógica adicional después de crear el usuario
        console.log("Usuario creado:", user);
        console.log("Token de acceso:", accessToken);

        alert(`Bienvenido: ${user.email}`);
      } catch (error) {
        console.error("Error al crear el usuario: " + error.message);
        // Puedes agregar lógica para manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar {...navbarProps} />
      {/* Card with form */}
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
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="password"
                />
              </div>
              <div className="row">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-secondary w-100"
                    onClick={handleSubmit}
                  >
                    Registrarse
                  </button>
                </div>
                <div className="col">
                  <a href="/login" className="btn btn-primary w-100">
                    Ingresar
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
