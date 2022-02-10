import { Typography } from "@mui/material";

function Title({ title }) {
  return (
    <Typography variant="h3" textAlign="center" color="var(--primary)">
      {title}
    </Typography>
  );
}
export default Title;
