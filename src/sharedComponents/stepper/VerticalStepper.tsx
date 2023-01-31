import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { StepContanier } from "./Theme";

interface SingleStep{
  label: string,
  description: string,
}
interface StepperInfo{
  steps: Array<SingleStep>
}
export default function VerticalStepper({steps}:StepperInfo ) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <StepContanier active={true} key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </StepContanier>
        ))}
      </Stepper>
    </Box>
  );
}
