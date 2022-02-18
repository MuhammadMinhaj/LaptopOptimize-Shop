import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
function Item({ name, icon, path, handleClick }) {
  const history = useHistory();
  const handleClickChangeRoute = () => history.push(path);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box boxShadow={3} borderRadius="0.75rem" overflow="hidden">
        <CardActionArea onClick={handleClick || handleClickChangeRoute}>
          <Box>
            <Box display="flex" justifyContent="space-between">
              <Box
                color="var(--white)"
                fontSize="3rem"
                bgcolor="var(--primary-deep)"
                p="1.5rem"
                borderRadius="0rem 2rem 2rem 0rem"
              >
                {icon}
              </Box>
              <Box
                bgcolor="var(--white)"
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h6" color="var(--primary)">
                  {name}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Box>
    </Grid>
  );
}
export default Item;
