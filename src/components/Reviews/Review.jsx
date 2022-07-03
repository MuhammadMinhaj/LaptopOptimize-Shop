import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";

const Review = ({ review, borderNone }) => {
  return (
    <>
      <Box py="0.5rem" display="flex">
        <Box textAlign="center">
          <Avatar
            variant="rounded"
            sx={{ width: 100, height: 100 }}
            src={review?.img}
          />

          <Typography px="0.5rem" variant="h6">
            {review?.name || ""}
          </Typography>
        </Box>

        <Box width="2rem" />
        <Box>
          <Rating value={review?.ratings || 0} />

          <Typography variant="body1" color="text.secondary">
            {review?.description || "N/A"}
          </Typography>
        </Box>
      </Box>
      {!borderNone && <Divider />}
    </>
  );
};

export default Review;
