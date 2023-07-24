import {styled} from "@mui/material/styles";
import MuiDialog from "@mui/material/Dialog";

export const BootstrapDialog = styled(MuiDialog)(({theme}) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    maxWidth: 900,
  },
}));
