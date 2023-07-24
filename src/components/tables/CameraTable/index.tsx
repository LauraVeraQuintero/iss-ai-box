import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import {GridCheckIcon, GridClearIcon} from "@mui/x-data-grid";
import {Button, Container} from "@mui/material";

import {useFormValuesContext} from "contexts";
import {Dialog} from "common/Dialog";
import {CamerasForm} from "components/forms/CamerasForm";
import {CAMERA_FORM_LABELS} from "components/forms/CamerasForm/config";

import {StyledTableCell, StyledTableRow} from "./styles";

type Props = {
  hideActions?: boolean;
};

export const CameraTable: React.FC<Props> = ({hideActions}) => {
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [index, setIndex] = React.useState<number>();
  const {cameras, setCameras} = useFormValuesContext();

  const handleDeleteOpen = (index: number) => {
    setIndex(index);
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setIndex(undefined);
  };

  const handleEditOpen = (index: number) => {
    setIndex(index);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setIndex(undefined);
  };

  const handleDeleteCamera = () => {
    if (index === undefined) return;

    setCameras((cameras) => {
      cameras.splice(index, 1);
      return cameras;
    });
  };

  return (
    <>
      <TableContainer sx={{mt: 5}}>
        <Table sx={{minWidth: 700}} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>{CAMERA_FORM_LABELS.manufacturer}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.cameraQuantity}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.storageDays}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.motionDetection}</StyledTableCell>
              <StyledTableCell align="right">
                {CAMERA_FORM_LABELS.continuousRecording}
              </StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.resolution}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.codec}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.fps}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.sceneActivity}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.recordingStream}</StyledTableCell>
              <StyledTableCell align="right">{CAMERA_FORM_LABELS.bitrate}</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {cameras.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.manufacturer}
                </StyledTableCell>
                <StyledTableCell align="right">{row.cameraQuantity}</StyledTableCell>
                <StyledTableCell align="right">{row.storageDays}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.motionDetection ? <GridCheckIcon /> : <GridClearIcon />}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.continuousRecording ? <GridCheckIcon /> : <GridClearIcon />}
                </StyledTableCell>
                <StyledTableCell align="right">{row.resolution}</StyledTableCell>
                <StyledTableCell align="right">{row.codec}</StyledTableCell>
                <StyledTableCell align="right">{row.fps}</StyledTableCell>
                <StyledTableCell align="right">{row.sceneActivity}</StyledTableCell>
                <StyledTableCell align="right">{row.recordingStream}</StyledTableCell>
                <StyledTableCell align="right">{row.bitrate}</StyledTableCell>
                {!hideActions && (
                  <StyledTableCell align="center">
                    <Container style={{display: "flex", padding: 0, gap: 10}}>
                      <Delete
                        onClick={() => {
                          handleDeleteOpen(index);
                        }}
                      />
                      <Edit
                        onClick={() => {
                          handleEditOpen(index);
                        }}
                      />
                    </Container>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        title="Are you sure you want to delete the camera?"
        open={deleteOpen}
        onClose={handleDeleteClose}>
        <Container
          style={{
            display: "flex",
            padding: 0,
            gap: 10,
            width: 400,
            justifyContent: "flex-end",
          }}>
          <Button variant="outlined" color="primary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleDeleteCamera();
              handleDeleteClose();
            }}>
            Ok
          </Button>
        </Container>
      </Dialog>
      <Dialog title="Edit Camera" open={editOpen} onClose={handleEditClose}>
        <CamerasForm afterSubmit={handleEditClose} onCancel={handleEditClose} cameraIndex={index} />
      </Dialog>
    </>
  );
};
