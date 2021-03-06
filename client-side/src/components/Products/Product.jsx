import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
// import Ratings from "../Common/Ratings";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Box,
  Button,
  CardActionArea,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import appContext from "../../context/context";
import ConfirmAlert from "../Common/ConfirmAlert";
import Features from "./Features";
const Product = ({ product, handleClickUpdate }) => {
  const {
    state: {
      admin: { isLoggedIn },
    },
    deleteBicycleHandleSubmit,
  } = useContext(appContext);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleClickDetail = () => {
    history.push(`/store/${product._id}`);
  };
  const handleClickOrder = () => {
    history.push(`/order/${product._id}`);
  };
  const handleClickDeleteToggle = () => {
    setOpen(!open);
  };
  const handleClickDeleteFood = async () => {
    await deleteBicycleHandleSubmit(product._id);
    setOpen(false);
  };
  const handleClickEdit = () => {
    handleClickUpdate(product);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ConfirmAlert
        open={open}
        msg="product"
        handleClose={handleClickDeleteToggle}
        handleSubmit={handleClickDeleteFood}
      />
      <Box boxShadow={1} height="100%" overflow="hidden" borderRadius="1rem">
        <CardActionArea onClick={() => history.push(`/store/${product._id}`)}>
          <Box component="img" width="100%" height="300px" src={product.img} />
        </CardActionArea>
        <Box p="0.5rem">
          <Box py="0.5rem">
            <Typography variant="subtitle1" color="text.secondary">
              Product Code: 34678934
            </Typography>

            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">{product.name}</Typography>
            </Box>
          </Box>

          <Features features={product?.features} />
          <Box>
            <Divider />
            <Box textAlign="center" py="0.5rem">
              <Typography variant="h6" color="var(--secondary)">
                {product.price}???
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              color={isLoggedIn ? "var(--primary)" : "var(--secondary)"}
            >
              <Button
                onClick={isLoggedIn ? handleClickEdit : handleClickDetail}
                fullWidth
                variant="outlined"
                mx="0.5rem"
                color="inherit"
                startIcon={isLoggedIn ? <EditIcon /> : <VisibilityIcon />}
              >
                {isLoggedIn ? "Edit" : "Details"}
              </Button>
              <Box width="1rem" />
              <Button
                onClick={
                  isLoggedIn ? handleClickDeleteToggle : handleClickOrder
                }
                fullWidth
                mx="0.5rem"
                variant={isLoggedIn ? "outlined" : "text"}
                color={isLoggedIn ? "error" : "inherit"}
                startIcon={isLoggedIn && <DeleteIcon />}
                endIcon={!isLoggedIn && <AddShoppingCartIcon />}
              >
                {isLoggedIn ? "Delete" : "Buy Now"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
export default Product;
