import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Container from "../Common/Container";
import Item from "./Item";
import testimonials from "./testimonials";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function CustomerSay() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    if (step < 1) {
      setActiveStep(testimonials.length - 1);
      return;
    }
    if (step === testimonials.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep(step);
    }
  };

  return (
    <Box bgcolor="var(--primary-deep)" py="5rem">
      <Container>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="100%">
            <Typography
              variant="h3"
              pb="3rem"
              color="var(--white)"
              align="center"
            >
              Testimonials
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              color="var(--secondary)"
            >
              <IconButton
                size="large"
                color="inherit"
                onClick={() => handleStepChange(activeStep - 1)}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {testimonials.map((item) => (
                  <>
                    <Item {...item} key={item.title} />
                  </>
                ))}
              </AutoPlaySwipeableViews>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => handleStepChange(activeStep + 1)}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CustomerSay;
