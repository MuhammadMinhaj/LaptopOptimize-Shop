import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import Title from "../components/Common/Title";
import Bicycles from "../components/Products/Products";
import appContext from "../context/context";

function Store() {
  const { fetchBicyclesData } = useContext(appContext);
  useEffect(() => {
    fetchBicyclesData();
  }, []);
  return (
    <main>
      <Box py="2rem">
        <Title
          fTitle="Our"
          lTitle="Store"
          subTitle="Choose your desire foods"
        />
        <Bicycles />
      </Box>
    </main>
  );
}
export default Store;
