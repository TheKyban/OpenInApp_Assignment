"use client";
import React, { useCallback, useState } from "react";
import styles from "./PopMenu.module.scss";
import Box from "../Box/Box";
import Image from "next/image";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import { Button } from "../Buttons/Button";

const PopMenu = ({ setAddDetails, user: User, doneFunc }) => {
    const [form, setForm] = useState("basic");
    const [user, setUser] = useState(User);
    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUser({ ...user, [name]: value });
    };
    const closeHandler = () => {
        setAddDetails(false);
        setUser({
            name: "",
            email: "",
            phone: "",
            instagram: "",
            youtube: "",
        });
    };

    // console.log(user);
    return (
        <div className={styles.popMenuWrapper}>
            <Box className={styles.popMenuCard}>
                <div className={styles.popMenuHeader}>
                    <h2>Add New Profile</h2>
                    <button onClick={closeHandler}>
                        <Image
                            src={"/cross.png"}
                            width={24}
                            height={24}
                            alt="cancel"
                        />
                    </button>
                </div>

                <div className={styles.formWrapper}>
                    <div className={styles.formHeader}>
                        <h3>
                            Basic
                            <div
                                style={{
                                    backgroundColor:
                                        form === "basic" && "#3F84F8",
                                }}
                            ></div>
                        </h3>
                        <h3>
                            Contact
                            <div
                                style={{
                                    backgroundColor:
                                        form === "contact" && "#3F84F8",
                                }}
                            ></div>
                        </h3>
                    </div>
                    {form === "basic" ? (
                        <BasicForm
                            setForm={setForm}
                            changeHandler={changeHandler}
                            user={user}
                        />
                    ) : (
                        <ContactForm
                            setForm={setForm}
                            changeHandler={changeHandler}
                            user={user}
                            doneFunc={doneFunc}
                        />
                    )}
                </div>
            </Box>
        </div>
    );
};

const BasicForm = ({ setForm, changeHandler, user }) => {
    return (
        <div className={styles.basicForm}>
            <InputWithLabel
                label={"Enter Name*"}
                labelFontSize={14}
                bold={false}
                fontSize={14}
                placeholder={"Ex. Jone doe"}
                type={"text"}
                border={true}
                backgroundColor="#fff"
                name={"name"}
                value={user?.name}
                changeFunc={changeHandler}
            />
            <InputWithLabel
                label={"Enter Email*"}
                labelFontSize={14}
                bold={false}
                fontSize={14}
                placeholder={"Eg. John@xyz.com"}
                type={"email"}
                border={true}
                backgroundColor="#fff"
                name={"email"}
                changeFunc={changeHandler}
                value={user?.email}
            />
            <InputWithLabel
                label={"Enter Phone*"}
                labelFontSize={14}
                bold={false}
                fontSize={14}
                placeholder={"Eg.  9123456789"}
                type={"text"}
                border={true}
                backgroundColor="#fff"
                name={"phone"}
                changeFunc={changeHandler}
                value={user?.phone}
            />

            <Button
                clickfuc={() => setForm("contact")}
                className={styles.btn}
                text="Next"
            />
        </div>
    );
};

const ContactForm = ({ setForm, changeHandler, user, doneFunc }) => {
    return (
        <div className={styles.basicForm}>
            <InputWithLabel
                label={"Instagram Link"}
                labelFontSize={14}
                bold={false}
                fontSize={14}
                placeholder={"Ex. Jone doe"}
                type={"text"}
                border={true}
                backgroundColor="#fff"
                name={"instagram"}
                changeFunc={changeHandler}
                value={user?.instagram}
            />
            <InputWithLabel
                label={"Youtube Link"}
                labelFontSize={14}
                bold={false}
                fontSize={14}
                placeholder={"Eg. John@xyz.com"}
                type={"email"}
                border={true}
                backgroundColor="#fff"
                name={"youtube"}
                changeFunc={changeHandler}
                value={user?.youtube}
            />

            <div className={styles.btns}>
                <Button
                    clickfuc={() => setForm("basic")}
                    className={styles.btn}
                    text="Back"
                />
                <Button
                    clickfuc={() => doneFunc(user)}
                    className={styles.btn}
                    text="Done"
                />
            </div>
        </div>
    );
};
export default React.memo(PopMenu);
