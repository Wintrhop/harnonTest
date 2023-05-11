'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Btn from "@/Components/Btn";
import Link from "next/link";
import { useLoggedContext } from "@/context/context";
import ConditionalRenderLogged from "@/Components/ConditionalRenderLogged";

export default function Home() {
  return (
    <>
      <div className={styles.txt}>Hola, este es el desarrollo de la prueba</div>
      <div className={styles.btnsContainer}>
        <ConditionalRenderLogged
          childrenOffline={
            <>
              <Btn
                style={styles.btn}
                href={"/login"}
                as={Link}
                text={"Login"}
                variant={"secondary"}
                size={"lg"}
              />
              <Btn
                style={styles.btn}
                href={"/signup"}
                as={Link}
                text={"Signup"}
                variant={"secondary"}
                size={"lg"}
              />
            </>
          }
          childrenOnline={
            <Btn
              style={styles.btn}
              href={"/profile"}
              as={Link}
              text={"Profile"}
              variant={"primary"}
              size={"lg"}
            />
          }
        />
      </div>
    </>
  );
}
