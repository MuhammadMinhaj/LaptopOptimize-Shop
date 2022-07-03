import {
  Facebook as FacebookIcon,
  GitHub as GithHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialLinks = () => {
  return (
    <Box display="flex" justifyContent="space-between" color="var(--white)">
      <IconButton
        size="large"
        color="inherit"
        href="https://facebook.com/MuhammadMinhaj2"
        target="_blank"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        href="https://www.youtube.com/channel/UCBSNbOumi5uNLJz8vFGJLRQ"
        target="_blank"
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        href="https://twitter.com/withMinhaj"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        href="https://github.com/MuhammadMinhaj"
        target="_blank"
      >
        <GithHubIcon />
      </IconButton>
      <IconButton
        size="large"
        color="inherit"
        href="https://www.linkedin.com/in/Muhammad-Minhaj"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};
export default SocialLinks;
