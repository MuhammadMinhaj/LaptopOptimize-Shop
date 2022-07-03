import { Box, Typography } from "@mui/material";

function Title({ title, fTitle, lTitle, subTitle }) {
  return (
    <Box textAlign="center">
      <Typography variant="h3" color="var(--primary)">
        {fTitle}{" "}
        <Typography variant="h3" component="span" color="var(--secondary)">
          {lTitle}
        </Typography>
      </Typography>
      <Typography variant="subtitle1" color="var(--neutral)">
        {subTitle}
      </Typography>
    </Box>
  );
}
export default Title;
