import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProductDetail from "../components/Products/Detail";
import Reviews from "../components/Reviews/Reviews";
import appContext from "../context/context";
function ProductDetailPage() {
  const { fetchSingleProductById, fetchAllReviews } = useContext(appContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchSingleProductById(id, history);
    fetchAllReviews(null, id);
  }, []);

  return (
    <main>
      <Box py="2rem">
        <ProductDetail />
      </Box>
      <Reviews />
    </main>
  );
}
export default ProductDetailPage;
