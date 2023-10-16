const Box = ({ className, styles, children, clickFunc }) => {
    return (
        <div
            onClick={clickFunc}
            className={className}
            style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "15px 20px",
                border: "2px solid #E0E0E0",
                boxShadow: "3px 3px 15px 0px #e0e0e0e3",
                ...styles,
            }}
        >
            {children}
        </div>
    );
};

export default Box;
