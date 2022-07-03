import GppGoodIcon from "@mui/icons-material/GppGood";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SpeedIcon from "@mui/icons-material/Speed";
import { Box, Grid } from "@mui/material";
import Container from "../Common/Container";
import Item from "./Item";
const iconStyle = { fontSize: "5rem", color: "var(--primary)" };
const WhyChooseUs = () => {
  return (
    <Box py="4rem">
      <Container>
        <Grid container spacing={3}>
          <Item
            icon={<KeyboardReturnIcon style={iconStyle} />}
            title="Refund System"
            description="The application of intelligent collection can promote the development of beverage packaging deposit-refund system."
          />
          <Item
            icon={<SpeedIcon style={iconStyle} />}
            title="Fast Delivery"
            description="We are providing door to door delivery service within in Bangladesh with guarantee. Otherwise you will get your money back"
          />
          <Item
            icon={<GppGoodIcon style={iconStyle} />}
            title="Best Quality"
            description="We're providing a reliable device with excellent performance, as well as the excellence in build quality for our customers"
          />
          <Item
            icon={<PriceCheckIcon style={iconStyle} />}
            title="Affordable Price"
            description="Despite the affordable price, the Surface Laptop Go is one of the best looking and well-made cheap laptops you can get."
          />
        </Grid>
      </Container>
    </Box>
  );
};
export default WhyChooseUs;
