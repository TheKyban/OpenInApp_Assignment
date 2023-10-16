import styles from "./InputWithLabel.module.scss";

const InputWithLabel = ({
    label,
    placeholder,
    type,
    value,
    changeFunc,
    bold = true,
    fontSize = 16,
    labelFontSize = 15,
    border = false,
    backgroundColor = "#f5f5f5",
    name,
}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={label} style={{ fontSize: `${labelFontSize}px` }}>
                {label}
            </label>
            <input
                type={type}
                onChange={changeFunc}
                value={value}
                placeholder={placeholder}
                id={label}
                required={true}
                name={name}
                style={{
                    fontWeight: `${!bold && "400"}`,
                    fontSize: `${fontSize && fontSize + "px"}`,
                    border: border && "1px solid #F2F2F2",
                    backgroundColor: backgroundColor,
                }}
            />
        </div>
    );
};

export default InputWithLabel;
