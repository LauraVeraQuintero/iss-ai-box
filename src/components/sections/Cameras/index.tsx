import * as React from "react";

import {Button, Container, Typography} from "@mui/material";

import {CameraTable} from "components/tables/CameraTable";
import {Dialog} from "common/Dialog";
import {CamerasForm} from "components/forms/CamerasForm";
import {useStepsContext} from "contexts";

export const Cameras: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const {setActiveStep, completed} = useStepsContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (!completed(1)) return;

    setActiveStep(2);
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "100%"}}>
      <Typography variant="h5" sx={{mb: 5}} justifyContent="center" color="black">
        Cameras
      </Typography>
      <Dialog
        title="Add Camera"
        openButtonLabel="Add Camera"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}>
        <CamerasForm afterSubmit={handleClose} onCancel={handleClose} />
      </Dialog>
      <CameraTable />
      <Container style={{maxWidth: "100%", display: "flex", justifyContent: "flex-end"}}>
        <Button variant="contained" color="primary" sx={{mt: 5}} onClick={handleNext}>
          Next
        </Button>
      </Container>
    </Container>
  );
};
