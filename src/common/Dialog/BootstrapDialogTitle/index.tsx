import React from "react";

import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export type DialogTitleProps = {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
};

export const BootstrapDialogTitle: React.FC<React.PropsWithChildren<DialogTitleProps>> = (
  props,
) => {
  const {children, onClose, ...other} = props;

  return (
    <DialogTitle sx={{m: 0, p: 2, fontSize: "1rem"}} {...other}>
      {children}
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
};
