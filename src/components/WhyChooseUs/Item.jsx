import { Box, Grid, Typography } from "@mui/material";

const Item = ({ title, description, icon }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box textAlign="center">
        <Box display="inline-block">{icon}</Box>
        <Typography
          pt="1rem"
          pb="0.5rem"
          variant="h5"
          color=" var(--secondary)"
        >
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Grid>
  );
};
export default Item;
