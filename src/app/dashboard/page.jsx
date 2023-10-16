"use client";
import Sidebar from "@/components/SideBar/Sidebar";
import styles from "./page.module.scss";
import Card from "@/components/Card/Card";
import Navbar from "@/components/Navbar/Navbar";
import Chart from "@/components/Chart/Chart";
import Box from "@/components/Box/Box";
import DonutChart from "@/components/DonutChart/DonutChart";
import Image from "next/image";
import PopMenu from "@/components/PopMenu/PopMenu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

const Dasboard = () => {
    const [addDetails, setAddDetails] = useState(false);
    const session = useSession();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        youtube: "",
    });

    const router = useRouter();
    useEffect(() => {
        if (session.status !== "authenticated") {
            router.push("/");
        }
    }, [session]);

    return (
        <div className={styles.DasboardWrapper}>
            {session.status === "loading" ||
            session.status === "unauthenticated" ? (
                <div className={styles.loading}>
                    <Loader />
                </div>
            ) : (
                <>
                    <Sidebar />
                    <div className={styles.contentWrapper}>
                        <Navbar />

                        {/* Cards */}
                        <div className={styles.cardRow}>
                            <Card
                                img={"/users.png"}
                                text={"Total Users"}
                                numberText={"9,721"}
                                increment={"+4.2%"}
                            />
                            <Card
                                img={"/transactions.png"}
                                text={"Total Transactions"}
                                numberText={"1,520"}
                                increment={"+4.2%"}
                            />
                            <Card
                                img={"/likes.png"}
                                text={"Total Likes"}
                                numberText={"9,721"}
                                increment={"+4.2%"}
                            />
                            <Card
                                img={"/users.png"}
                                text={"Total Users"}
                                numberText={"9,721"}
                                increment={"+4.2%"}
                            />
                        </div>
                        {/* Bar Chart  */}
                        <Box className={styles.chartWrapper}>
                            <div className={styles.chartHeader}>
                                <div className={styles.info}>
                                    <span>Activities</span>
                                    <span>May - June 2021</span>
                                </div>
                                <div className={styles.dots}>
                                    <div>
                                        <div
                                            className={`${styles.dot} ${styles.guestDot}`}
                                        ></div>
                                        <span>Guest</span>
                                    </div>
                                    <div>
                                        <div
                                            className={`${styles.dot} ${styles.userDot}`}
                                        ></div>
                                        <span>User</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.chart}>
                                <Chart />
                            </div>
                        </Box>
                        {/* Bottom Cards */}
                        <div className={styles.dasboardBottom}>
                            <Box className={styles.donutChartWrapper}>
                                <div className={styles.donutHeader}>
                                    <span>Top products</span>
                                    <span>May-June 2021</span>
                                </div>
                                <div className={styles.donut}>
                                    <DonutChart />
                                    <div className={styles.donutInfo}>
                                        <div className={styles.product}>
                                            <div className={styles.productName}>
                                                <div
                                                    className={`${styles.dot} ${styles.productDot1}`}
                                                ></div>
                                                <span>Basic Tees</span>
                                            </div>
                                            <span>55%</span>
                                        </div>
                                        <div className={styles.product}>
                                            <div className={styles.productName}>
                                                <div
                                                    className={`${styles.dot} ${styles.productDot2}`}
                                                ></div>
                                                <span>Custom Short Pants</span>
                                            </div>
                                            <span>31%</span>
                                        </div>
                                        <div className={styles.product}>
                                            <div className={styles.productName}>
                                                <div
                                                    className={`${styles.dot} ${styles.productDot3}`}
                                                ></div>
                                                <span>Super Hoodies</span>
                                            </div>
                                            <span>14%</span>
                                        </div>
                                    </div>
                                </div>
                            </Box>

                            {/* Profile */}
                            {user.name && user.email && user.phone ? (
                                <Box className={styles.profileDetails}>
                                    <h1>{user.name}</h1>
                                    <div className={styles.details}>
                                        <Link
                                            href={"#"}
                                            className={styles.contact}
                                        >
                                            <Image
                                                src={"/whatsapp.png"}
                                                width={28}
                                                height={28}
                                                alt="whatsapp"
                                            />
                                            <span>{user.phone}</span>
                                        </Link>
                                        <Link
                                            href={"#"}
                                            className={styles.contact}
                                        >
                                            <Image
                                                src={"/instagram.png"}
                                                width={28}
                                                height={28}
                                                alt="instagram"
                                            />
                                            <span>{user.instagram}</span>
                                        </Link>
                                        <Link
                                            href={"#"}
                                            className={styles.contact}
                                        >
                                            <Image
                                                src={"/email.png"}
                                                width={28}
                                                height={28}
                                                alt="email"
                                            />
                                            <span>{user.email}</span>
                                        </Link>
                                        <Link
                                            href={"#"}
                                            className={styles.contact}
                                        >
                                            <Image
                                                src={"/youtube.png"}
                                                width={28}
                                                height={28}
                                                alt="youtube"
                                            />
                                            <span>{user.youtube}</span>
                                        </Link>
                                    </div>
                                </Box>
                            ) : (
                                // Add Profile
                                <Box
                                    className={styles.profile}
                                    clickFunc={() => setAddDetails(true)}
                                >
                                    <Image
                                        src={"/plus.png"}
                                        width={77}
                                        height={77}
                                        alt={"add profile"}
                                        priority
                                    />
                                    <span style={{ userSelect: "none" }}>
                                        Add Profile
                                    </span>
                                </Box>
                            )}
                        </div>

                        {/* Pop Menu */}
                        {addDetails && (
                            <PopMenu
                                closeHandler={() => {
                                    setAddDetails(false);
                                    setUser({
                                        name: "",
                                        email: "",
                                        phone: "",
                                        instagram: "",
                                        youtube: "",
                                    });
                                }}
                                user={user}
                                setUser={setUser}
                                doneFunc={() => setAddDetails(false)}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Dasboard;
