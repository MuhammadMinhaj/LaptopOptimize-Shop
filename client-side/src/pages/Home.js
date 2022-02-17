import { Box, Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Category from "../components/Category/Category";
import Title from "../components/Common/Title";
import CustomerSay from "../components/CustomerSay/CustomerSay";
import Fqas from "../components/FQAS/FQAS";
import Products from "../components/Products/Products";
import Reviews from "../components/Reviews/Reviews";
import Slider from "../components/Slider/Slider";
import StaticInfo from "../components/StaticInfo/StaticInfo";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import appContext from "../context/context";
function Home() {
  const { fetchBicyclesData } = useContext(appContext);
  const history = useHistory();
  useEffect(() => {
    fetchBicyclesData();
  }, []);
  return (
    <main>
      <Slider />
      <Box py="4rem">
        <Title fTitle="Featured" lTitle="category" />
        <Category />
      </Box>

      <Box py="4rem">
        <Title fTitle="Why choose" lTitle="us?" />
        <WhyChooseUs />
      </Box>
      <Box py="2rem">
        <Title
          fTitle="Our"
          lTitle="Store"
          subTitle="Get the most popular products"
        />
        <Products isNone limit={6} />
        <Box color="var(--secondary)" m="auto" maxWidth="400px" py="2rem">
          <Button
            onClick={() => history.push("/store")}
            variant="outlined"
            color="inherit"
            size="large"
            fullWidth
          >
            See More
          </Button>
        </Box>
      </Box>

      <Box py="2rem">
        <CustomerSay />
      </Box>
      <Box py="2rem">
        <StaticInfo />
      </Box>

      <Reviews />

      <Box py="2rem">
        <Fqas />
      </Box>
    </main>
  );
}
export default Home;
