import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Container from "../Common/Container";
import User from "./User";

function TopHeader() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box bgcolor="var(--primary-deep)">
      <Container>
        <Box
          display={isMD ? "flex" : "block"}
          alignItems="center"
          justifyContent="space-between"
        >
          {isMD && (
            <Box display="flex" flexWrap="wrap">
              <Typography variant="subtitle1" color="var(--white)" pr="1rem">
                Skypee ID:
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="#9093a7"
                  pr="1rem"
                >
                  {" "}
                  212947cb52acc217
                </Typography>
              </Typography>

              <Typography variant="subtitle1" color="var(--white)">
                Email :{" "}
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="#9093a7"
                >
                  programmer.mdminhaj@gmail.com
                </Typography>
              </Typography>
            </Box>
          )}

          <User />
        </Box>
      </Container>
      <Divider />
    </Box>
  );
}
export default TopHeader;
