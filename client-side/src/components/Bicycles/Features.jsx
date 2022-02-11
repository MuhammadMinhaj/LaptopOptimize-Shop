import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Typography } from "@mui/material";

const FeatureItem = ({ name }) => (
  <Box display="flex" alignItems="center">
    <Box mr="0.25rem" color="var(--primary)">
      <FiberManualRecordIcon color="inherit" fontSize="0.25rem" />
    </Box>
    <Typography variant="subtitle2" color="var(--neutral)">
      {name}
    </Typography>
  </Box>
);

const Features = ({ features }) => {
  const featuresArr = features?.split("#");
  return (
    <Box py="1rem">
      {featuresArr?.map((item) =>
        item ? <FeatureItem name={item} key={item} /> : <></>
      )}
    </Box>
  );
};
export default Features;
