"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/NavBar.module.scss";
import ConditionalRenderLogged from "./ConditionalRenderLogged";
import { useEffect, useState } from "react";
import { useLoggedContext } from "@/context/context";

const NavBr = (props) => {
  const [userName, setUserName] = useState("");
  const { logged, setLogged } = useLoggedContext();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setUserName(localStorage.getItem("name"));
  }, [logged]);

  useEffect(() => {
    if (!loaded) {
      if (!logged) {
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("age");
        localStorage.removeItem("role");
      }
      setLoaded(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    localStorage.removeItem("role");
    setLogged((state) => false);

  };
  return (
    <>
      <Navbar
        className={`${styles.navBr} w-75 p-3 position-relative top-0 start-50 translate-middle-x`}
        expand="sm"
      >
        <Container>
          <Navbar.Brand href="/" as={Link}>
            Harnon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ConditionalRenderLogged
              childrenOffline={
                <Nav className="">
                  <Nav.Link href="/login" as={Link}>
                    Login
                  </Nav.Link>
                  <Nav.Link href="/signup" as={Link}>
                    Signup
                  </Nav.Link>
                </Nav>
              }
              childrenOnline={
                <Nav className="">
                  <Nav.Link href="/profile" as={Link}>
                    Profile
                  </Nav.Link>
                </Nav>
              }
            />

            <Nav className="ms-auto">
              <ConditionalRenderLogged
                className={`${styles.nameFlex}`}
                childrenOnline={
                  <Nav>
                    <Nav.Item>Hola {userName}</Nav.Item>
                  </Nav>
                }
              />
              <ConditionalRenderLogged
                childrenOnline={
                  <Nav className={styles.item}>
                    <Nav.Item onClick={logout}>LogOut</Nav.Item>
                  </Nav>
                }
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBr;
