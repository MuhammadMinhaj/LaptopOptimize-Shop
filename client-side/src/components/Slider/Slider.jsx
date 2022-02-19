import LaptopIcon from "@mui/icons-material/Laptop";
import LoginIcon from "@mui/icons-material/Login";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import Container from "../Common/Container";
const Slide = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = useAuth();
  return (
    <Box bgcolor="var(--primary-deep)">
      <Container>
        <Box
          py={isMD ? "2rem" : "7rem"}
          display="flex"
          flexDirection={isMD ? "column-reverse" : "row"}
          alignItems="center"
          justifyContent="center"
          textAlign={isMD ? "center" : "left"}
        >
          <Box width={isMD ? "100%" : "65%"}>
            <Box py={isMD ? "0.25rem" : "1rem"}>
              <Typography color="var(--white)" variant={isMD ? "h4" : "h2"}>
                Welcome to
              </Typography>
              <Typography color="var(--white)" variant={isMD ? "h4" : "h1"}>
                Laptop Optimize
              </Typography>
            </Box>

            <Typography
              color="var(--white)"
              variant={isMD ? "subtitle2" : "subtitle1"}
              pb={isMD ? "1rem" : "2rem"}
              maxWidth="600px"
            >
              We are providing a great collection of laptops for you. Please
              browse to get your desired Laptop from Our Wide Selection of
              Branded Laptop Collection and at the most affordable Price in
              Bangladesh.
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={isMD ? "center" : "flex-start"}
            >
              <Button
                href="/store"
                variant="outlined"
                color="secondary"
                startIcon={<LaptopIcon />}
                size="large"
              >
                Browse
              </Button>
              <Box width="0.5rem" height="0.5rem" />
              {!user?.email && (
                <Button
                  href="/user/signup"
                  variant="contained"
                  color="secondary"
                  startIcon={<LoginIcon />}
                  size="large"
                >
                  Sign Up
                </Button>
              )}
            </Box>
          </Box>
          <Box width={isMD ? "100%" : "35%"}>
            <img
              src="/static/laptop-png-6754.png"
              width={isMD ? "250px" : "100%"}
              alt="Laptop"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Slide;
