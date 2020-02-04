const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    minHeight: "400px",
    maxHeight: "400px",
    width: "260px",
    borderRadius: "10px",
    outline: "none",
    [theme.breakpoints.up("sm")]: {
      width: "400px"
    }
  },
  titleModal: {
    fontSize: "16px",
    marginBottom: "0px"
  },
  header: {
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: "1px solid rgba(var(--b6a,219,219,219),1)",
    height: "55px",
    lineHeight: "55px"
  },
  icon: {
    display: "flex"
  },
  typo5: {
    marginBottom: "0px",
    fontSize: "16px",
    fontWeight: "600"
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    color: "#262626",
    opacity: "1",
    boxShadow: "none"
  },
  tab: {
    minWidth: "130px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "200px"
    }
  },
  containerPanel: {
    maxHeight: "297px",
    minHeight: "297px",
    overflow: "auto"
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey"
    }
  }
});

export default styles;
