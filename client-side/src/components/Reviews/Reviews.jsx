import { Box, Divider, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import appContext from "../../context/context";
import Container from "../Common/Container";
// import Title from "../Common/Title";
import Review from "./Review";

const Reviews = ({ title, id }) => {
  const {
    state: { reviews },
    fetchAllReviews,
  } = useContext(appContext);

  useEffect(() => {
    fetchAllReviews(id);
  }, []);
  return (
    <Box py="4rem">
      {/* <Title
        fTitle="Customers"
        lTitle={title || "Reviews"}
        subTitle="See what our customers are saying about our service!"
      /> */}
      <Container>
        <Typography p="1rem" variant="h6" color="text.secondary">
          Reviews :{" "}
          <Typography component="span" variant="h6" color="var(--primary)">
            {reviews.length}
          </Typography>
        </Typography>
        <Divider />
        <Box p="1rem" maxHeight="700px" overflow="auto">
          {reviews?.map((review, i) => (
            <Review
              key={review._id}
              review={review}
              borderNone={reviews.length - 1 === i}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
