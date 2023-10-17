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
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

const Dasboard = () => {
    const [addDetails, setAddDetails] = useState(false);
    const session = useSession();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        youtube: "",
    });
    const [data, setData] = useState({});

    const router = useRouter();
    useEffect(() => {
        if (session.status !== "authenticated") {
            router.push("/");
        }
    }, [session]);

    const fetchData = useMemo(async () => {
        // data

        setLoading(true);
        const data = await fetch(`/api/data`);
        const json = await data.json();
        setData(json[0]);

        // user
        if (session?.data?.user?.email) {
            const user = await fetch(`/api/user`, {
                method: "POST",
                body: JSON.stringify({
                    email: session?.data?.user?.email,
                    name: session?.data?.user?.name,
                }),
            });
            const json2 = await user.json();
            setUser(json2.user);
        }

        setLoading(false);
    }, []);

    const updateDetails = async (newData) => {
        setUser(newData);
        setAddDetails(false);
        const updateUser = await fetch(`/api/user`, {
            method: "PUT",
            body: JSON.stringify(newData),
        });
        const json = await updateUser.json();
    };

    return (
        <div className={styles.DasboardWrapper}>
            {session.status === "loading" ||
            session.status === "unauthenticated" ||
            loading ? (
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
                                img={"/revenue.png"}
                                text={"Total Revenue"}
                                numberText={data?.total_revenue?.count}
                                increment={`${data?.total_revenue?.increment}%`}
                            />
                            <Card
                                img={"/transactions.png"}
                                text={"Total Transactions"}
                                numberText={data?.total_transactions?.count}
                                increment={`${data?.total_transactions?.increment}%`}
                            />
                            <Card
                                img={"/likes.png"}
                                text={"Total Likes"}
                                numberText={data?.total_likes?.count}
                                increment={`${data?.total_likes?.increment}%`}
                            />
                            <Card
                                img={"/users.png"}
                                text={"Total Users"}
                                numberText={data?.total_users?.count}
                                increment={`${data?.total_users?.increment}%`}
                            />
                        </div>
                        {/* Bar Chart  */}
                        <BarChart data={data} />
                        {/* Bottom Cards */}
                        <div className={styles.dasboardBottom}>
                            {/* Donut Chart */}
                            <Donut data={data} />
                            {/* Profile */}
                            {user.name && user.email && user.phone ? (
                                <Profile
                                    user={user}
                                    setAddDetails={setAddDetails}
                                />
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
                                setAddDetails={setAddDetails}
                                user={user}
                                doneFunc={updateDetails}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

const Profile = ({ user, setAddDetails }) => {
    return (
        <Box className={styles.profileDetails}>
            <div className={styles.profileHeader}>
                <h1>{user.name}</h1>
                <Image
                    src={"/pencil.png"}
                    height={25}
                    width={25}
                    alt="edit"
                    onClick={() => setAddDetails(true)}
                />
            </div>
            <div className={styles.details}>
                <Link href={"#"} className={styles.contact}>
                    <Image
                        src={"/whatsapp.png"}
                        width={28}
                        height={28}
                        alt="whatsapp"
                    />
                    <span>{user.phone}</span>
                </Link>
                <Link href={"#"} className={styles.contact}>
                    <Image
                        src={"/instagram.png"}
                        width={28}
                        height={28}
                        alt="instagram"
                    />
                    <span>{user.instagram}</span>
                </Link>
                <Link href={"#"} className={styles.contact}>
                    <Image
                        src={"/email.png"}
                        width={28}
                        height={28}
                        alt="email"
                    />
                    <span>{user.email}</span>
                </Link>
                <Link href={"#"} className={styles.contact}>
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
    );
};

const BarChart = ({ data }) => {
    return (
        <Box className={styles.chartWrapper}>
            <div className={styles.chartHeader}>
                <div className={styles.info}>
                    <span>Activities</span>
                    <span>{`${data?.start_month} - ${data?.last_month} ${data?.year}`}</span>
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
                <Chart data1={data?.guest} data2={data?.user} />
            </div>
        </Box>
    );
};

const Donut = ({ data }) => {
    return (
        <Box className={styles.donutChartWrapper}>
            <div className={styles.donutHeader}>
                <span>Top products</span>
                <span>{`${data?.start_month} - ${data?.last_month} ${data?.year}`}</span>
            </div>
            <div className={styles.donut}>
                <DonutChart
                    dataSet={[
                        data?.top_products?.[0].value,
                        data?.top_products?.[1].value,
                        data?.top_products?.[2].value,
                    ]}
                />
                <div className={styles.donutInfo}>
                    <div className={styles.product}>
                        <div className={styles.productName}>
                            <div
                                className={`${styles.dot} ${styles.productDot1}`}
                            ></div>
                            <span>{`${data?.top_products?.[0].name}%`}</span>
                        </div>
                        <span>{`${data?.top_products?.[0].value}%`}</span>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productName}>
                            <div
                                className={`${styles.dot} ${styles.productDot2}`}
                            ></div>
                            <span>{`${data?.top_products?.[1].name}`}</span>
                        </div>
                        <span>{`${data?.top_products?.[1].value}%`}</span>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productName}>
                            <div
                                className={`${styles.dot} ${styles.productDot3}`}
                            ></div>
                            <span>{data?.top_products?.[2].name}</span>
                        </div>
                        <span>{`${data?.top_products?.[2].value}%`}</span>
                    </div>
                </div>
            </div>
        </Box>
    );
};
export default Dasboard;
