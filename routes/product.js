const router = require("express").Router();

const {
  getSingleProductGetController,
  getAllProductGetController,
  addProductPostController,
  updateProductPutController,
  deleteProductDeleteController,
} = require("../controllers/product");

// Auth middleware to verify admin
const isAuthenticatedAdmin = require("../middlewares/adminAuth");

router.get("/single/:id", getSingleProductGetController);
router.get("/all", getAllProductGetController);
router.post("/add", isAuthenticatedAdmin(), addProductPostController);
router.put("/update/:id", isAuthenticatedAdmin(), updateProductPutController);
router.delete(
  "/delete/:id",
  isAuthenticatedAdmin(),
  deleteProductDeleteController
);

module.exports = router;
