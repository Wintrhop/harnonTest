"use client";
import React, { useContext, useRef, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import styles from "../styles/Login.module.scss";
import Swal from "sweetalert2";
import contextCreated from "@/context/context";
import Btn from "./Btn";
import LoadingSpinner from "./LoadingSpinner";

const LoginForm = ({ handleClose }) => {
  const logged = useContext(contextCreated);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      try {
        setLoading(true);
        const password = form.password.value;
        const email = form.email.value;

        const user = {
          email,
          password,
        };

        // fetch
        Swal.fire({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
          icon: "success",
          title: "Sesión iniciada",
        });

        // set info
        console.log('user ', user);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Ocurrio un error al iniciar sesión revisa tus datos",
          icon: "error",
          confirmButtonText: "Perfecto",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <Form
          noValidate
          validated={validated}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group>
            <FloatingLabel label="Email" className="mb-3">
              <Form.Control
                required
                id="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un correo electronico valido
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel label="Password">
              <Form.Control
                id="password"
                type="password"
                placeholder="Password"
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                required
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una contraseña de 8 caracteres, una mayuscula una
                minuscula un numero y un caracter especial
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <LoadingSpinner loadState={loading} />
          <Btn
            style={styles.loginBtn}
            type="submit"
            text={"Login"}
            size={"lg"}
          />
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
