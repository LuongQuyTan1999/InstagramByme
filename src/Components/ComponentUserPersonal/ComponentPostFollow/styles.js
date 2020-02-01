const styles = theme => ({
  baivietnguoitheodoi: {
    textAlign: "center",
    borderTop: "1px solid #DDDDDD",
    padding: "12px 0",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  typogra: {
    color: "#999999"
  }
});

export default styles;
