import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import LaptopIcon from "@mui/icons-material/Laptop";
import MemoryIcon from "@mui/icons-material/Memory";
import MouseIcon from "@mui/icons-material/Mouse";
import PrintIcon from "@mui/icons-material/Print";
import RouterIcon from "@mui/icons-material/Router";
import ScannerIcon from "@mui/icons-material/Scanner";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import { Box, Grid } from "@mui/material";
import Container from "../Common/Container";
import Item from "./Item";
const iconStyle = { fontSize: "3rem", color: "var(--primary)" };
const Category = () => {
  return (
    <Box py="4rem">
      <Container>
        <Grid container spacing={3}>
          <Item icon={<LaptopIcon style={iconStyle} />} title="All Laptop" />
          <Item
            icon={<DesktopWindowsIcon style={iconStyle} />}
            title="Desktop"
          />
          <Item icon={<MemoryIcon style={iconStyle} />} title="Processor" />
          <Item
            icon={<GraphicEqIcon style={iconStyle} />}
            title="Graphics Card"
          />
          <Item icon={<SdStorageIcon style={iconStyle} />} title="SSD" />
          <Item icon={<KeyboardIcon style={iconStyle} />} title="Keyboards" />
          <Item icon={<MouseIcon style={iconStyle} />} title="Mouse" />
          <Item icon={<HeadphonesIcon style={iconStyle} />} title="Headphone" />
          <Item icon={<CameraAltIcon style={iconStyle} />} title="WebCam" />
          <Item icon={<PrintIcon style={iconStyle} />} title="Printer" />
          <Item icon={<ScannerIcon style={iconStyle} />} title="Scanner" />
          <Item icon={<RouterIcon style={iconStyle} />} title="Router" />
        </Grid>
      </Container>
    </Box>
  );
};
export default Category;
