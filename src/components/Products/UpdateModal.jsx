import { Cancel as CancelIcon, Edit as EditIcon } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";

export default function UpdateModal({
  open,
  handleToggle,
  product,
  handleSubmit,
  handleChange,
}) {
  return (
    <div>
      <Dialog
        component="form"
        onSubmit={handleSubmit}
        open={open}
        onClose={() => handleToggle(null)}
      >
        <DialogTitle>Update Product"</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Product Name"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={product?.name || ""}
            name="name"
          />
          <TextField
            margin="dense"
            id="model"
            label="Model"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={product?.model || ""}
            name="model"
          />
          <TextField
            margin="dense"
            id="price"
            label="Product Price"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={product?.price || ""}
            name="price"
          />
          <TextField
            margin="dense"
            id="status"
            label="Stock Status"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={product?.stockStatus || ""}
            name="stockStatus"
          />

          <TextField
            margin="dense"
            id="img"
            label="Product Image URL"
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={product?.img || ""}
            name="img"
          />
          <TextField
            margin="dense"
            id="status"
            label="Features"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            onChange={handleChange}
            value={product?.features || ""}
            name="features"
          />
          <TextField
            margin="dense"
            id="status"
            label="Description"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            onChange={handleChange}
            value={product?.description || ""}
            name="description"
          />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            startIcon={<CancelIcon />}
            variant="outlined"
            color="error"
            onClick={() => handleToggle(null)}
          >
            Cancel
          </Button>
          <Button
            startIcon={<EditIcon />}
            color="secondary"
            variant="contained"
            type="submit"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
