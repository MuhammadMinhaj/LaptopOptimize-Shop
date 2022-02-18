import { Box, Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import Accessiblities from "../components/Admin/Accessibilities";
import Container from "../components/Common/Container";
import OrdersManagement from "../components/OrdersManagement/OrdersManagement";
import appContext from "../context/context";
const OrderManagementPage = () => {
  const { fetchAllOrders } = useContext(appContext);
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <Box py="5rem">
      <Container>
        <Typography variant="h4" align="center" pb="1rem">
          All Orders
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <Accessiblities isRow />
          </Grid>
          <Grid item sm={9}>
            <OrdersManagement />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrderManagementPage;
