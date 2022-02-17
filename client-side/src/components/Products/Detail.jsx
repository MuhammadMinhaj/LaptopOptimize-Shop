import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router";
import appContext from "../../context/context";
import Container from "../Common/Container";
import ListItem from "../Common/ListItem";
import Ratings from "../Common/Ratings";
import ReviewBox from "../Reviews/ReviewBox";
import Features from "./Features";

const ProductDetail = () => {
  const {
    state: {
      singleProduct,
      admin: { isLoggedIn },
    },
  } = useContext(appContext);
  const history = useHistory();
  const handleClickOrder = () => {
    history.push(`/order/${singleProduct._id}`);
  };
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Box
              boxShadow={2}
              component="img"
              width="100%"
              height="auto"
              src={singleProduct?.img || "N/A"}
            />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h4">{singleProduct?.name || "N/A"}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Model: 2017
            </Typography>
            <Typography variant="h6" color="var(--primary)">
              Features
            </Typography>
            <Features features={singleProduct?.features} />
            <ListItem name="Price" desc={singleProduct?.price + "$" || "N/A"} />
            <ListItem
              name="Status"
              desc={singleProduct?.stockStatus || "N/A"}
            />
            <ListItem name="Product Code" desc={singleProduct?._id || "N/A"} />
            <Typography variant="h6" color="var(--primary)">
              Ratings
            </Typography>
            <Box
              pb="0.5rem"
              display="flex"
              justifyContent={isSM ? "flex-start" : "flex-end"}
            >
              <Ratings ratings={singleProduct?.ratings} />
            </Box>
            <Box color="var(--secondary)" py={isSM ? "1rem" : "0rem"}>
              <Button
                onClick={handleClickOrder}
                variant="outlined"
                mx="0.5rem"
                color="inherit"
                startIcon={<ArrowForwardIcon />}
                disabled={isLoggedIn}
                fullWidth
              >
                Order Now
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Typography variant="h6" color="var(--primary)">
          Description
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {singleProduct?.description || "N/A"}
        </Typography>
      </Box>
      <Typography
        py="1rem"
        color="var(--secondary)"
        variant="h4"
        align="center"
      >
        Write a review
      </Typography>
      <ReviewBox bicycle={singleProduct?._id} />
    </Container>
  );
};
export default ProductDetail;
