import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import appContext from "../../context/context";
import TopNavbar from "../Admin/TopNavbar";
import Container from "../Common/Container";
import AddProduct from "./AddProduct";
import Product from "./Product";
import UpdateModal from "./UpdateModal";
const Products = ({ isNone, limit }) => {
  const {
    state: {
      products,
      admin: { isLoggedIn },
    },
    updateProductHandleSubmit,
  } = useContext(appContext);
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickUpdateToggle = (fd) => {
    setOpen(!open);
    setProduct(fd);
  };
  const handleChange = (e) => {
    e.persist();
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProductHandleSubmit(product);
    setOpen(false);
    setProduct(null);
  };
  return (
    <Box>
      <UpdateModal
        open={open}
        product={product}
        handleToggle={handleClickUpdateToggle}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Container>
        {isLoggedIn && !isNone && <TopNavbar />}
        <Box
          display={"flex"}
          justifyContent="space-between"
          flexDirection={isMD ? "column-reverse" : "row"}
          alignItems="center"
        >
          <Typography py="1rem" variant="h6" color="text.secondary">
            Total Product :{" "}
            <Typography component="span" variant="h6" color="var(--primary)">
              {products?.length || "N/A"}
            </Typography>
          </Typography>
          {isLoggedIn && !isNone && <AddProduct />}
        </Box>
        <Grid container spacing={2}>
          {products.slice(0, limit || products.length).map((product) => (
            <Product
              product={product}
              key={product._id}
              handleClickUpdate={handleClickUpdateToggle}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default Products;
