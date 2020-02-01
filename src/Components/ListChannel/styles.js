const styles = theme => ({
  Boxcontainer: {
    display: "flex",
    justifyContent: "center",
    borderTop : theme.color.colorBorderTop
  },
  container: {
    alignItems: "center",
    margin: "60px auto 44px",
    paddingLeft: "44px",
    paddingRight: "44px",
    textAlign: "center",
    maxWidth: "438px",
    flexDirection: "column"
  },
  Icon: {
    border: "2px solid #555555",
    borderRadius: "50%",
    padding: "15px"
  },
  IconImage: {},
  Upload: {
    color: "#262626",
    margin: "30px 0 24px",
    fontWeight: "300",
    fontSize: "28px"
  },
  Convention: {
    color: "#262626",
    marginBottom: "28px",
    lineHeight: "18px",
    fontSize: "13px"
  }
});

export default styles;
