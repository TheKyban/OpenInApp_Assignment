import Image from "next/image";
import Box from "../Box/Box";
import styles from "./Card.module.scss";
const Card = ({ img, text, numberText, increment, arrow = false }) => {
    return (
        <Box className={styles.card}>
            <Image src={img} height={31} width={31} alt={img} />
            <p>{text}</p>
            <div className={styles.bottom}>
                <span>{numberText}</span>
                <p>{increment}</p>
            </div>
            {arrow && (
                <Image
                    className={styles.arrow}
                    src={"/arrow.png"}
                    height={3.3}
                    width={8}
                    alt={"arrow"}
                />
            )}
        </Box>
    );
};

export default Card;
