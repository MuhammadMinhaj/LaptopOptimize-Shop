import { Box, Grid, Typography } from "@mui/material";
import Container from "../Common/Container";
import Brand from "../Header/Brand";
import FooterBottom from "./FooterBottom";
import GetInTouch from "./GetInTouch";
import Locations from "./Locations";
import RelatedLinks from "./RelatedLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <Box component="footer" bgcolor="var(--primary)">
    <Container>
      <Box py="2rem">
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <Brand />
            <Typography variant="subtitle1" color="var(--white)">
              We are providing a great collection of laptops for you. Please
              browse to get your desired Laptop from Our Wide Selection of
              Branded Laptop Collection and at the most affordable Price in
              Bangladesh.
            </Typography>
          </Grid>

          <Grid item sm={3}>
            <Locations />
          </Grid>

          <Grid item sm={3}>
            <RelatedLinks />
          </Grid>
          <Grid item sm={3}>
            <GetInTouch />
            <SocialLinks />
          </Grid>
        </Grid>
      </Box>
      <FooterBottom />
    </Container>
  </Box>
);

export default Footer;
