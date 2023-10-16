"use client";

import Image from "next/image";
import styles from "./Button.module.scss";
import { useSession } from "next-auth/react";

export const SignWithBtn = ({
    img = "/google.png",
    title = "Sign in with Google",
    clickFunc,
}) => {
    return (
        <button onClick={clickFunc} className={styles.signWithBtn}>
            <Image src={img} alt="Signin" width={15} height={15} />
            <span>{title}</span>
        </button>
    );
};

export const Button = ({ text = "Sign In", className, clickfuc }) => {
    return (
        <button
            className={`${styles.normalBtn} ${className}`}
            onClick={clickfuc}
        >
            {text}
        </button>
    );
};
