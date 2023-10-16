import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
const Navbar = () => {
    const { data } = useSession();
    const [search, setSearch] = useState("");
    const [logout, setLogout] = useState(false);

    return (
        <div className={styles.navbar}>
            <h1>Dasboard</h1>
            <div className={styles.right}>
                <div className={styles.search}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                        <Image
                            src={"/search.png"}
                            width={12}
                            height={12}
                            alt="search"
                        />
                    </button>
                </div>
                <Image
                    src={"/bell.png"}
                    width={18}
                    height={21}
                    alt="notification"
                />
                <div className={styles.profileContainer}>
                    <Image
                        className={styles.profilePic}
                        src={
                            data?.user?.image
                                ? data?.user?.image
                                : "/avatar.png"
                        }
                        width={30}
                        height={30}
                        alt="profile"
                        onClick={() => setLogout(!logout)}
                    />

                    {logout && (
                        <div
                            className={styles.logoutContainer}
                            onClick={() => signOut("google")}
                        >
                            <span>Logout</span>
                            <Image
                                src={"/logout.png"}
                                width={24}
                                height={24}
                                alt="logout"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
