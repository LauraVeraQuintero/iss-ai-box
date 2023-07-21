import React from "react";
import {useFormValuesContext, useStepsContext} from "contexts";
import {CameraForm} from "../CameraForm";
import {Button} from "@mui/material";

export const CamerasForm: React.FC = () => {
  const {cameraFormValues, setCameraFormValues} = useFormValuesContext();
  const [camerasCount, setCamerasCount] = React.useState(cameraFormValues?.length || 1);
  const {setActiveStep} = useStepsContext();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={{mt: 5}}
        onClick={() => setCamerasCount((v) => v + 1)}>
        Add camera
      </Button>
      {[...Array(camerasCount)].map((_value, index) => (
        <CameraForm key={index} index={index} />
      ))}
      <Button variant="contained" color="primary" sx={{mt: 5}} onClick={() => setActiveStep(2)}>
        Next
      </Button>
    </div>
  );
};
