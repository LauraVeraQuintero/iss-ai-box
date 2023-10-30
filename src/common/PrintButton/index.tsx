import React from "react";
import { STEPPER_ID } from "components/StepperBox";
import { REPORT_ACTIONS_ID, REPORT_SECTION_ID } from "components/Report";
import { Button } from "../Button";

export const PrintButton = () => {
  const handlePrint = () => {
    const reportSection = document.getElementById(REPORT_SECTION_ID);
    const reportSectionParent = reportSection?.parentElement?.parentElement;
    const reportActions = document.getElementById(REPORT_ACTIONS_ID);
    const stepper = document.getElementById(STEPPER_ID);

    if (reportSection && reportActions && stepper && reportSectionParent) {
      const originalStyles = {
        sectionMaxWidth: reportSection.style.maxWidth,
        sectionMargin: reportSection.style.margin,
        sectionParentBoxShadow: reportSectionParent.style.boxShadow,
        stepperOpacity: stepper.style.opacity,
        reportActionsOpacity: reportActions.style.opacity,
      };

      reportSection.style.maxWidth = "100%";
      reportSection.style.margin = "0";
      reportSectionParent.style.boxShadow = "none";
      stepper.style.opacity = "0";
      reportActions.style.opacity = "0";

      window.print();

      reportSection.style.maxWidth = originalStyles.sectionMaxWidth;
      reportSection.style.margin = originalStyles.sectionMargin;
      reportSectionParent.style.boxShadow = originalStyles.sectionParentBoxShadow;
      stepper.style.opacity = originalStyles.stepperOpacity;
      reportActions.style.opacity = originalStyles.reportActionsOpacity;
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handlePrint}>
      Save as PDF
    </Button>
  );
};
