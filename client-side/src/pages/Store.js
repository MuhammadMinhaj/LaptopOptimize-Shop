import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import Title from "../components/Common/Title";
import Products from "../components/Products/Products";
import appContext from "../context/context";

function Store() {
  const { fetchProductsData } = useContext(appContext);
  useEffect(() => {
    fetchProductsData();
  }, []);
  return (
    <main>
      <Box py="2rem">
        <Title
          fTitle="Our"
          lTitle="Store"
          subTitle="Choose your desire products"
        />
        <Products />
      </Box>
    </main>
  );
}
export default Store;
