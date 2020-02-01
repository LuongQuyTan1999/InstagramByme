const styles = theme => ({
  containerInput: {
    marginBottom: "15px"
  },
  inputLabel: {
    padding: "0 20px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#262626",
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      textAlign: "inherit"
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0px 0px 0px 20px"
    }
  },
  input: {
    width: "100%",
    padding: "0 20px",
    height: "32px",
    lineHeight: "32px",
    [theme.breakpoints.up("md")]: {
      paddingRight: "120px"
    }
  },
  inputContent: {
    width: "100% ",
    padding: "0 10px",
    height: "100%",
    outline: "none",
    border: theme.color.colorBorderTop,
    borderRadius: "5px"
  },
  containerButton: {
    padding: " 50px 20px"
  },
  button: {
    display: "flex",
    justifyContent: "center",
    paddingRight: "25px"
  }
});
export default styles;
