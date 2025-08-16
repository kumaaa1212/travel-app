import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  StepConnector,
  stepConnectorClasses,
  styled,
} from "@mui/material";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 15,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#0361e3",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#0361e3",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: "#e0e0e0",
    borderRadius: 1,
  },
}));

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    color: "#929292",
    fontSize: "14px",
    fontWeight: 400,
    "&.Mui-active": {
      color: "black",
      fontWeight: 600,
    },
    "&.Mui-completed": {
      color: "#929292",
      fontWeight: 500,
    },
  },
  "& .MuiStepLabel-iconContainer": {
    "& .MuiStepIcon-root": {
      fontSize: "32px",
      "&.Mui-active": {
        color: "#0361e3",
      },
      "&.Mui-completed": {
        color: "#0361e3",
      },
      "& .MuiStepIcon-text": {
        fill: "#fff",
        fontSize: "14px",
        fontWeight: 500,
      },
    },
  },
}));

interface CustomStepperProps {
  activeStep: number;
  steps: string[];
}

const StepperBase: React.FC<CustomStepperProps> = ({
  activeStep,
  steps,
}): React.JSX.Element => {

  
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<CustomConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <CustomStepLabel>{label}</CustomStepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperBase;
