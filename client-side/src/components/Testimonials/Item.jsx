import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SingleRatings from "../Common/SingleRatings";

function ImageAvatars({ name, src }) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        variant="rounded"
        alt={name}
        src={src}
        sx={{ width: "100%", height: 200 }}
      />
    </Stack>
  );
}

const Item = ({ name, title, description, img, ratings }) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box px={isSM ? "1rem" : "5rem"}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <ImageAvatars src={img} name={name} />
          <Typography py="0.15rem" variant="h6" color="var(--white)">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="h5" py="0.5rem" color="var(--secondary)">
            {title}
          </Typography>
          <Typography color="var(--white)">{description}</Typography>
          <SingleRatings ratings={ratings} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Item;
