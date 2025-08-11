import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function ModalBase() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <LockOutlinedIcon sx={{ fontSize: 70 }} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            認証が必要です
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            新しい旅行を作成するには、ログインまたは会員登録が必要です。
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
