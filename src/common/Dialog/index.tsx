import * as React from "react";
import DialogContent from "@mui/material/DialogContent";

import {Button} from "common/Button";

import {BootstrapDialogTitle} from "./BootstrapDialogTitle";
import {BootstrapDialog} from "./styles";

type Props = {
  title: string;
  open: boolean;
  onClose: () => void;
  openButtonLabel?: string;
  onOpen?: () => void;
};

export const Dialog: React.FC<React.PropsWithChildren<Props>> = ({
  openButtonLabel,
  children,
  title,
  onClose,
  onOpen,
  open,
}) => {
  return (
    <div>
      {onOpen && openButtonLabel && (
        <Button variant="contained" color="primary" onClick={onOpen}>
          {openButtonLabel}
        </Button>
      )}
      <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers style={{padding: "25px"}}>
          {children}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
