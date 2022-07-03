import { Home as HomeIcon } from "@mui/icons-material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import appContext from "../../context/context";

const Item = ({ name, icon, path }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(path);
  };

  return <Tab label={name} icon={icon} onClick={handleClick} />;
};

export default function SimpleBottomNavigation({ currentPage, button }) {
  const [value, setValue] = useState(currentPage || 0);
  const {
    state: { adminLogout },
  } = useContext(appContext);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box my="1rem" boxShadow={1} width="100%">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        scrollButtons
        variant="scrollable"
      >
        <Item name="Home" icon={<HomeIcon />} path="/" />
        <Item name="Manage Store" icon={<DirectionsBikeIcon />} path="/store" />

        <Item
          name="Manage Orders"
          icon={<FormatListBulletedIcon />}
          path="/all/orders"
        />
        <Item
          name="Manage Admin"
          icon={<AdminPanelSettingsIcon />}
          path="/admin/manage"
        />
        <Item name="All Reviews" icon={<ReviewsIcon />} path="/reviews" />
        <Tab
          label="Logout"
          onClick={() => adminLogout(history)}
          icon={<LogoutIcon />}
        />
      </Tabs>
    </Box>
  );
}
