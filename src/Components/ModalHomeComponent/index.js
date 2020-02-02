import React from "react";
import { Grid, Modal, Backdrop, Fade } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "./styles";
import InputModalComponent from "../InputModalComponent";

function ModalComponent(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <MoreVertIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open} style={{ outline: "none" }}>
          <Grid container className={classes.paper}>
            <InputModalComponent
              content="Báo cáo là không phù hợp"
              styleColor={true}
            />
            <InputModalComponent content="Bỏ theo dõi" styleColor={true} />
            <InputModalComponent content="Đi tới bài viết" />
            <InputModalComponent content="Chia sẻ" />
            <InputModalComponent content="Sao chép liên kết" />
            <InputModalComponent content="Nhúng" />
            <InputModalComponent content="Hủy" locationBottom={true} />
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(ModalComponent);
