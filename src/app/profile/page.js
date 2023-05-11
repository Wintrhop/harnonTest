'use client'
import React, { useEffect, useState } from "react";
import styleApp from "../page.module.css";
import { useLoggedContext } from "@/context/context";
import ConditionalRenderLogged from "@/Components/ConditionalRenderLogged";

const page = () => {

  const [loaded, setLoaded] = useState(false);
  const { logged, setLogged } = useLoggedContext();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setAge(localStorage.getItem("age"));
    setRole(localStorage.getItem("role"));
  }, [logged]);

  return (
    <>
      
        <ConditionalRenderLogged
        childrenOffline={<div>
          Debes iniciar Session
        </div>} childrenOnline={
          <>
          <div>Bienvenido {userName}</div>
          <div>correo electronico {email}</div>
          <div>Edad {age}</div>
          <div>Rol {role}</div>
          </>
        }/>
      
    </>
  );
};

export default page;
