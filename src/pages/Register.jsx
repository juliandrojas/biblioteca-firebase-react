import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { supabase } from '../supabase/supabase';

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //? Método para buscar un usuario por su email en Firestore
  const searchUser = async (email) => {
    try {
      let { data: users, error } = supabase.from('users').select('name');
      users ? console.log("users") : console.log('Not users');
    } catch (error) {
      console.error('Error al buscar un usuario en Supabase: '+error);
      throw error; //! Re-lanzamos el error para manejarlo en el contexto en el que se llame la función
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar campos obligatorios
    if (!name || !email || !password) {
      alert("Campos obligatorios");
      console.error("Error: Campos obligatorios vacíos");
    } else {
      console.log(`Formulario enviado: Name: ${name} ,Email ${email}, password: ${password}`);
      //* Lógica para manejar el envío del formulario
      try {
        searchUser(email).then((userData) => {
          console.log(userData)
        });
      } catch (error) {
        console.error('Error al buscar usuario en Firestore:', error);
      }
      
      /*
      try {
        // ! Consultamos la base de datos para rescatar el correo del usuario
        const userDocRef = collection(db, 'users');
        const q = query(userDocRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        // * Si existe un resultado
        if(querySnapshot.docs.length > 0) {
          // * El usuario fue encontrado en Firestore
          const userData = querySnapshot.docs[0].data();
          console.log(`Datos del usuario: ${userData}`);
        } else {
          console.error(`Usuario no encontrado en Firestore`);
        }*/

        /*
        //! Revisamos si el  usuario ya existe en la base de datos
        const docRef = doc(db, 'usuarios', 'juliandra140201@gmail.com');
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        // * Si el usuario existe
        if(docSnap.exists) {
          console.log('Datos del usuario encontrado: ', docSnap.data());
        } else {
          console.error('No hay usuarios con este email en la base de datos');
        }
      } catch (error) {
        console.error(`Error al buscar usuarios en Firestore: ${error}`);
      }*/
      /*
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
        try {
          //Agregamos datos a Firestore
        const usuariosCollection = collection(db, 'usuarios');
        await addDoc(usuariosCollection, {
          uid: user.uid,
          name,
          email,
          password,
        });
        console.log("Usuarios y datos almacenados en Firestore");
        } catch (error) {
          console.error('Error al amacenar datos en Firestore: '+error);
        }
      } catch (error) {
        console.error("Error al crear el usuario: " + error.message);

        // Verifica si el error es debido a que el correo electrónico ya está en uso
        if (error.code === "auth/email-already-in-use") {
          alert(
            "El correo electrónico ya está registrado. Por favor, inicia sesión."
          );
        } else {
          // Puedes agregar lógica para manejar otros errores
          alert("Error al crear el usuario. Por favor, inténtalo de nuevo.");
        }
      }*/
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
                <label htmlFor="exampleInputName1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  name="username"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
                  <button
                    type="submit"
                    className="btn btn-secondary w-100"
                    onClick={handleSubmit}
                  >
                    Registrarse
                  </button>
                </div>
                <div className="col">
                <Link to={'/login'} className="btn btn-primary w100">Ingresar</Link>
                  {/* <a href="/login" className="btn btn-primary w-100">
                    Ingresar
                  </a> */}
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
