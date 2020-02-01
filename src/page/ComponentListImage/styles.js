const styles = theme => ({
  baivietnguoitheodoi: {
    textAlign: "center",
    padding: "12px 0",
    position: "relative"
  },
  typogra: {
    color: "#999999",
    padding: "0 2px",
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      padding: "15px"
    },
    "&:hover > div ": {
      display: "inline-flex"
    }
  },
  hoverDiv: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "none",
    margin: "15px 14px"
  },
  boxIncon: {
    display: "flex",
    justifyContent: "center",
    height: "16px",
    lineHeight: "16px"
  },
  contentIcon: {
    display: "flex",
    alignItems: "center",
    height: "16px",
    lineHeight: "16px",
    marginRight: "13px",
    color: "#FFFFFF"
  },
  typoIcon: {
    fontSize: "20px",
    marginBottom: "inherit"
  }
});

export default styles;
