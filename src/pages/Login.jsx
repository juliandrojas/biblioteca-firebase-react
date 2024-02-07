import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

function Login() {
  const staticLinks = [
    { label: "Inicio", href: "/", active: true },
    { label: "Productos", href: "#" },
    { label: "Ofertas", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Ingresar", href: "/login" },
    { label: "Disabled", disabled: true },
  ];

  const navbarProps = {
    brandName: "Index",
    links: staticLinks,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*
    // Validar campos obligatorios
    if (!email || !password) {
      alert("Campos obligatorios");
      console.error("Error: Campos obligatorios vacíos");
    } else {
      console.log(`Formulario enviado: Email ${email}, password: ${password}`);
      // Lógica para manejar el envío del formulario
      const auth = getAuth();
      try {
        // Autenticamos el usuario con el correo y la contraseña
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        console.log("Usuario autenticado:", user);

        // Consultamos la base de datos para rescatar el nombre de usuario
        const userDocRef = collection(db, "users");
        const q = query(userDocRef, where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.docs.length > 0) {
          // El usuario fue encontrado en Firestore
          const userData = querySnapshot.docs[0].data();
          console.log("Datos del usuario: ", userData);
        } else {
          console.error("Usuario no encontrado en Firestore");
        }
      } catch (error) {
        console.error("Error al autenticar el usuario: " + error.message);
      }
    }*/
  };

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
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  required
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
                <Link to={'/register'} className="btn btn-primary w-100">Registrarse</Link>
                  {/* <a href="/register" className="btn btn-primary w-100">
                    Registrate
                  </a> */}
                </div>
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-secondary w-100"
                    onClick={handleSubmit}
                  >
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
