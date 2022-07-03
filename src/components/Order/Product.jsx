import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import appContext from "../../context/context";
import Container from "../Common/Container";

const Product = () => {
  const {
    state: { orderProductQuantity, singleProduct },
    handleChangeOrderQuantity,
    setAlertMessage,
  } = useContext(appContext);

  const increaseQty = () => {
    handleChangeOrderQuantity(orderProductQuantity + 1);
  };
  const decreaseQty = () => {
    if (orderProductQuantity === 1) {
      setAlertMessage("info", "At least one quantity of food for an order");
      return;
    }
    handleChangeOrderQuantity(orderProductQuantity - 1);
  };
  const getDesc = () => {
    if (singleProduct?.description) {
      if (singleProduct.description.length > 3) {
        return singleProduct.description.slice(0, 100) + "...";
      } else {
        return singleProduct.description;
      }
    }
  };
  return (
    <Container>
      <Box>
        <Grid container spacing={3}>
          <Grid item md={5}>
            <Box
              component="img"
              width="100%"
              height="auto"
              src={singleProduct?.img}
            />
          </Grid>
          <Grid item md={7}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box py="0.5rem">
                <Typography variant="subtitle1" color="text.secondary">
                  Model : {singleProduct?.model || "N/A"}
                </Typography>
                <Typography variant="h4">
                  {singleProduct?.name || "N/A"}
                </Typography>
              </Box>
              <Divider />

              <Typography variant="subtitle2" color="text.secondary">
                Product Code :
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="var(--primary)"
                  py="0.5rem"
                >
                  {" "}
                  {singleProduct?._id || "N/A"}
                </Typography>
              </Typography>

              <Typography variant="h6" color="var(--primary)" py="0.5rem">
                Price :
                <Typography
                  component="span"
                  variant="h5"
                  color="var(--secondary)"
                  py="0.5rem"
                  align="right"
                >
                  {" "}
                  {singleProduct?.price || "N/A"}
                  {"$"}
                </Typography>
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                {getDesc()}
              </Typography>
              <Box
                border="1px solid var(--secondary)"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                color="var(--secondary)"
                my="1rem"
              >
                <IconButton color="inherit" onClick={increaseQty}>
                  <AddIcon />
                </IconButton>
                <Typography
                  component="span"
                  variant="h5"
                  color="var(--primary)"
                  py="0.5rem"
                  align="right"
                >
                  {orderProductQuantity}
                </Typography>
                <IconButton color="inherit" onClick={decreaseQty}>
                  <RemoveIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Product;
