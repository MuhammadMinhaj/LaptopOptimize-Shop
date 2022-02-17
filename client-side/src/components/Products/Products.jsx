import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import appContext from "../../context/context";
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
    updateBicycleHandleSubmit,
  } = useContext(appContext);
  const [bicycle, setBicycle] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickUpdateToggle = (fd) => {
    setOpen(!open);
    setBicycle(fd);
  };
  const handleChange = (e) => {
    e.persist();
    setBicycle({
      ...bicycle,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBicycleHandleSubmit(bicycle);
    setOpen(false);
    setBicycle(null);
  };
  return (
    <Box>
      <UpdateModal
        open={open}
        bicycle={bicycle}
        handleToggle={handleClickUpdateToggle}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Container>
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
          {products.slice(0, limit || products.length).map((bicycle) => (
            <Product
              bicycle={bicycle}
              key={bicycle._id}
              handleClickUpdate={handleClickUpdateToggle}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default Products;
