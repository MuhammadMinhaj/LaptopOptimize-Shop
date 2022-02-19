import { ArrowRight as ArrowRightIcon } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LinkItem = ({ name, path }) => (
  <Box display="flex" py="0.25rem">
    <Box mr="0.5rem" color="var(--secondary)">
      <ArrowRightIcon color="inherit" />
    </Box>
    <Link to={path} style={{ textDecoration: "none", color: "var(--white)" }}>
      {name}
    </Link>
  </Box>
);

const RelatedLinks = () => (
  <Box>
    <Typography color="var(--white)" variant="h5">
      Related Links
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>

    <LinkItem name="Store" path="/store" />
    <LinkItem name="Sign In" path="/user/login" />
    <LinkItem name="Sign Up" path="/user/signup" />
    <LinkItem name="About Us" path="/about-us" />
    <LinkItem name="FQAS" path="/fqas" />
  </Box>
);

export default RelatedLinks;
