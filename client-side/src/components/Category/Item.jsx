import { Box, CardActionArea, Grid, Typography } from "@mui/material";

const Item = ({ title, icon }) => {
  return (
    <Grid item xs={6} sm={3} md={2}>
      <CardActionArea sx={{ borderRadius: "0.5rem" }}>
        <Box textAlign="center" boxShadow={2} borderRadius="0.5rem" py="1rem">
          <Box display="block">{icon}</Box>
          <Typography variant="subtitle" color=" var(--primary)">
            {title.toUpperCase()}
          </Typography>
        </Box>
      </CardActionArea>
    </Grid>
  );
};
export default Item;
