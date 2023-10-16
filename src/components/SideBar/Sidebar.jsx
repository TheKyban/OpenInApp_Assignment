import Link from "next/link";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import Box from "../Box/Box";
const Sidebar = ({ active = "dasboard" }) => {
    return (
        <Box className={styles.sidebarWrapper}>
            <div className={styles.sidebar}>
                <div className={styles.top}>
                    <h1 className={styles.heading}>Board.</h1>
                    <ul className={styles.links}>
                        <li>
                            <Link
                                href={"#"}
                                style={{
                                    opacity: `${active === "dasboard" && 1}`,
                                    fontWeight: `${active === "dasboard" && "500"}`
                                }}
                            >
                                <Image
                                    src={"/dashboard.png"}
                                    height={18}
                                    width={18}
                                    alt="dasboard"
                                />{" "}
                                Dasboard
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <Image
                                    src={"/transaction.png"}
                                    height={20.78}
                                    width={18}
                                    alt="transaction"
                                />{" "}
                                Transactions
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <Image
                                    src={"/schedule.png"}
                                    height={18}
                                    width={18}
                                    alt="schedule"
                                />{" "}
                                Schedules
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                {" "}
                                <Image
                                    src={"/user.png"}
                                    height={18}
                                    width={18}
                                    alt="user"
                                />
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                {" "}
                                <Image
                                    src={"/setting.png"}
                                    height={18}
                                    width={18}
                                    alt="setting"
                                />
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className={styles.bottomLinks}>
                    <li>
                        <Link href={"#"}>Help</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </Box>
    );
};

export default Sidebar;
