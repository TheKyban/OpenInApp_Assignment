"use client";

import FormWrapper from "@/components/FormWrapper/FormWrapper";
import styles from "./page.module.scss";
import SignIn from "@/components/Signin/Signin";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Loader from "@/components/Loader/Loader";

export default function Home() {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status === "authenticated") {
            router.push("/dashboard");
        }
    }, [session]);

    return (
        <div className={styles.home}>
            {session.status === "loading" ||
            session.status === "authenticated" ? (
                <div className={styles.loading}>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className={styles.left}>
                        <h1 className={styles.logo}>LOGO</h1>
                        <h2 className={styles.title}>Board.</h2>

                        <div className={styles.icons}>
                            <Image
                                className={styles.img}
                                src={"/github.png"}
                                width={44}
                                height={44}
                                alt="github"
                            />
                            <Image
                                className={styles.img}
                                src={"/twitter.png"}
                                width={44}
                                height={44}
                                alt="twitter"
                            />
                            <Image
                                className={styles.img}
                                src={"/linkedin.png"}
                                width={44}
                                height={44}
                                alt="linkedin"
                            />
                            <Image
                                className={styles.img}
                                src={"/discord.png"}
                                width={44}
                                height={44}
                                alt="discord"
                            />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <FormWrapper>
                            <SignIn />
                        </FormWrapper>
                    </div>
                </>
            )}
        </div>
    );
}
