import Link from "next/link";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import styles from "./Signin.module.scss";
import { Button } from "../Buttons/Button";

const SignIn = () => {
    return (
        <form className={styles.form}>
            <InputWithLabel
                label={"Email address"}
                placeholder={"johndoe@gmail.com"}
                type={"email"}
            />
            <InputWithLabel
                label={"Password"}
                placeholder={"1234"}
                type={"password"}
            />
            <Link href={"#"}>Forgot password?</Link>
            <Button />

            <p>
                Don’t have an account? <Link href={"#"}>Register here</Link>
            </p>
        </form>
    );
};

export default SignIn;
