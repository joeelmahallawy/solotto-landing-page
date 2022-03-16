import theme from "../../themes";

const styles = {
  verticalLine: {
    width: "20px",
    height: ["1100px", "1200px", "2300px", "2000px", "1800px"],
    marginTop: "10rem",
    borderRadius: "10px",

    bgGradient: `linear(${theme.palette.warning.main}, ${theme.palette.error.main})`,
    zIndex: "1",
    display: ["none", "none", "block", "block", "block"],
  },
};
export default styles;
