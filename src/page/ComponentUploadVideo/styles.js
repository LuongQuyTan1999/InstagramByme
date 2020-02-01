const styles = theme => ({
  container: {
    margin: "60px auto 0",
    width: "100%",
    maxWidth: "935px"
  },
  containerBoxLeft: {
    position: "relative",
    width: "100%",
    height: "auto"
  },
  contentBox: {
    border: "dashed 1px #dbdbdb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    width: "100%",
    height: "100%",
    maxHeight: "570px",
    padding: "23px"
  },
  video: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    border: "0",
    width: "100%",
    height: "100%",
  },
  contentBoxLeft: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "#fafafa"
  },
  textFile: {
    color: "#262626",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    marginBottom: "12px"
  },
  textFile1: {
    color: "#999",
    fontSize: "12px",
    lineHeight: "16px",
    maxWidth: "270px"
  },

  // Right
  containerBoxRight: {
    paddingLeft: "60px"
  },
  title: {
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "300"
  },
  anhbia: {
    color: "#262626",
    display: "block",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
    marginTop: " 28px",
    marginBottom: "10px"
  },
  quydinhfile: {
    color: "#999",
    fontSize: "12px",
    paddingBottom: "8px"
  },
  khunghinh: {
    display: "block",
    paddingTop: "110px",
    width: "62px",
    border: theme.color.colorBorderTop,
    backgroundColor: "#dddddd",
    position : "relative"
  },
  input: {
    width: "100%"
  },
  radio: {
    display: "flex",
    color: theme.color.defaultTextColor
  },
  radioTypo: {
    marginBottom: "5px",
    lineHeight: "13px"
  },
  textSave: {
    marginLeft: "15px",
    color: "#3897f0"
  },

  // containerBottom
  containerBottom: {
    marginTop: "80px",
    borderBottom: theme.color.colorBorderTop,
    marginBottom: "15px"
  }
});

export default styles;
