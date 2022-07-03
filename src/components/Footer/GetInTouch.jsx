import {
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

const Item = ({ icon, description }) => (
  <Box py="0.5rem" display="flex" alignItems="center">
    <Box color="white" pr="0.5rem">
      {icon}
    </Box>
    <Typography variant="body1" color="GrayText">
      {description}
    </Typography>
  </Box>
);

const GetInTouch = () => (
  <Box>
    <Typography color="var(--white)" variant="h5">
      Get In Touch
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>
    <Item
      icon={<LocationOnIcon color="inherit" />}
      description="4203 Chawkbazar, Chittagong Sadar, Chittagong, Bangladesh"
    />
    <Item
      icon={<EmailIcon color="inherit" />}
      description="programmer.mdminhaj@gmail.com"
    />
    <Item
      icon={<PhoneIcon color="inherit" />}
      description="Skypee ID: 212947cb52acc217"
    />
  </Box>
);

export default GetInTouch;
