import GetAppIcon from "@mui/icons-material/GetApp";
import PeopleIcon from "@mui/icons-material/People";
import ReviewsIcon from "@mui/icons-material/Reviews";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Container from "../Common/Container";
import Item from "./Item";
const StaticInfo = () => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const iconStyle = {
    fontSize: isSM ? "3rem" : "4.5rem",
    color: "var(--secondary)",
  };

  return (
    <Box py="4rem">
      <Container>
        <Grid container spacing={3}>
          <Item
            icon={<ReviewsIcon style={iconStyle} />}
            title="3000"
            description="Total Reviews"
          />
          <Item
            icon={<StorefrontIcon style={iconStyle} />}
            title="4000"
            description="Products in Store"
          />
          <Item
            icon={<GetAppIcon style={iconStyle} />}
            title="65876"
            description="App Downloads"
          />
          <Item
            icon={<PeopleIcon style={iconStyle} />}
            title="5000"
            description="Happy Customers"
          />
        </Grid>
      </Container>
    </Box>
  );
};
export default StaticInfo;
