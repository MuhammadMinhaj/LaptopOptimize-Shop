import { Box, Divider, Grid, Typography } from "@mui/material";
import Accessiblities from "../../components/Admin/Accessibilities";
import Container from "../../components/Common/Container";
import Profile from "../../components/Profile/Profile";
function UserProfilePage() {
  return (
    <Box py="4rem">
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Profile />
          </Grid>
          <Grid item md={8}>
            <Typography variant="h3" pb="1rem" color="var(--neutral)">
              WELCOME TO DASHBOARD
            </Typography>
            <Divider />
            <br />
            <br />
            <Accessiblities />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default UserProfilePage;
