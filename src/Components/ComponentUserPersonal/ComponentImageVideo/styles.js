const styles = theme => ({
  baivietnguoitheodoi: {
    textAlign: "center",
    borderTop: theme.color.colorBorderTop,
    // padding: "12px 0",
    height: "45px",
    display: "flex",
    justifyContent: "center"
  },
  link: {
    textDecoration: "none"
  },
  typogra: {
    color: "#999999",
    display: "flex",
    justifyContent: "center",
    height: "45px",
    alignItems: "center"
  },
  typoIcon: {
    display: "none",
    marginLeft: "5px",
    lineHeight: "26px",
    marginBottom: "0px",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  icon: {
    width: "93px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "60px",
      width: "auto"
    }
  },
  iconFinal: {
    width: "93px",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    }
  }
});

export default styles;
