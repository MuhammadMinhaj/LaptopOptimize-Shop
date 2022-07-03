import { Add as AddIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import AddModal from "./AddModal";
const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        color="var(--primary)"
        maxWidth="400px"
        width="100%"
        display="flex"
        alignItems="center"
        height="100%"
        mb="1rem"
      >
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          color="secondary"
          size="large"
          fullWidth
          onClick={handleToggle}
        >
          Add Product
        </Button>
      </Box>
      <AddModal open={open} handleToggle={handleToggle} />
    </>
  );
};

export default AddProduct;
