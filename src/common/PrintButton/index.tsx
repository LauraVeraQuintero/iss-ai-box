import React from "react";
import {Button} from "@mui/material";

import {STEPPER_ID} from "components/StepperBox";
import {REPORT_ACTIONS_ID, REPORT_SECTION_ID} from "components/Report";

export const PrintButton = () => {
  const handlePrint = () => {
    const reportSection = document.getElementById(REPORT_SECTION_ID);
    const reportSectionParent = reportSection?.parentElement?.parentElement;
    const reportActions = document.getElementById(REPORT_ACTIONS_ID);
    const stepper = document.getElementById(STEPPER_ID);

    if (reportSection && reportActions && stepper && reportSectionParent) {
      const originalSectionMaxWidth = reportSection.style.maxWidth;
      const originalSectionMargin = reportSection.style.margin;
      const originalSectionParentBoxShadow = reportSectionParent.style.boxShadow;
      const originalStepperOpacity = stepper.style.opacity;
      const originalReportActionsOpacity = reportActions.style.opacity;
      reportSection.style.maxWidth = "100%";
      reportSection.style.margin = "0";
      reportSectionParent.style.boxShadow = "none";
      stepper.style.opacity = "0";
      reportActions.style.opacity = "0";

      setTimeout(() => {
        window.print();
        reportSection.style.maxWidth = originalSectionMaxWidth;
        reportSection.style.margin = originalSectionMargin;
        reportSectionParent.style.boxShadow = originalSectionParentBoxShadow;
        stepper.style.opacity = originalStepperOpacity;
        reportActions.style.opacity = originalReportActionsOpacity;
      }, 1_000);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handlePrint}>
      Save as PDF
    </Button>
  );
};
