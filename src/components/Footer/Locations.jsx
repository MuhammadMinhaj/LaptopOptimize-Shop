import { Box, Divider, Typography } from "@mui/material";

const Item = ({ title, description, number }) => (
  <Box py="0.25rem">
    <Typography variant="subtitle1" color="var(--white)">
      {title}
    </Typography>
    <Typography variant="body1" color="GrayText">
      {description}
    </Typography>
    <Typography variant="body1" color="GrayText">
      {number}
    </Typography>
  </Box>
);

const Locations = () => (
  <Box>
    <Typography color="var(--white)" variant="h5">
      Our Branches
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>

    <Item
      title="CDA AVENUE Branch"
      description="4000 East Nasirabad, Chittagong"
      number={"+123-456-7890"}
    />
    <Item
      title="Khulshi Branch"
      description="4225 Chittagong Sadar, Chittagong"
      number={"+321-654-0987"}
    />
    <Item
      title="Chawkbazar Branch"
      description="4203 Chawkbazar, Chittagong"
      number={"+123-456-7890"}
    />
  </Box>
);

export default Locations;
