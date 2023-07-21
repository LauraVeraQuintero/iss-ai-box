import React from "react";
import {useFormValuesContext, useStepsContext} from "contexts";
import {CameraForm} from "../CameraForm";
import {Button, Container} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {NextButton} from "./styles";

export const CamerasForm: React.FC = () => {
  const {cameraFormValues, setCameraFormValues} = useFormValuesContext();
  const [camerasCount, setCamerasCount] = React.useState(cameraFormValues?.length || 1);
  const {setActiveStep} = useStepsContext();

  const handleRemove = (index: number) => {
    return;
  };

  return (
    <Container style={{marginTop: "60px", maxWidth: "750px"}}>
      <NextButton>
        <Button
          startIcon={<AddIcon />}
          variant="text"
          color="primary"
          sx={{mt: 5}}
          onClick={() => setCamerasCount((v) => v + 1)}>
          Add camera
        </Button>
      </NextButton>
      {[...Array(camerasCount)].map((_value, index) => (
        <CameraForm key={index} index={index} onRemove={handleRemove} onSave={handleRemove} />
      ))}
      <NextButton>
        <Button variant="contained" color="primary" sx={{mt: 5}} onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </NextButton>
    </Container>
  );
};
