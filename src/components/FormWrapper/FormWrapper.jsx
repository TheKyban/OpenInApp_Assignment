"use client";

import { signIn, useSession } from "next-auth/react";
import { SignWithBtn } from "../Buttons/Button";
import styles from "./FormWrapper.module.scss";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FormWrapper = ({ children }) => {
   
    return (
        <div className={styles.formWrapper}>
            <h1>Sign In</h1>
            <p className={styles.firstPTag}>Sign in to your account</p>
            <div className={styles.formContainer}>
                <div className={styles.signInWith}>
                    <SignWithBtn
                        img="/google.png"
                        title="Sign in with Google"
                        clickFunc={() => signIn("google")}
                    />
                    <SignWithBtn img="/apple.png" title="Sign in with Apple" />
                </div>
                {children}
            </div>
        </div>
    );
};

export default FormWrapper;
