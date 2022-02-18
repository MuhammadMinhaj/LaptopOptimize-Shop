import { Home as HomeIcon } from "@mui/icons-material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Item from "../../components/Profile/Item";
import appContext from "../../context/context";
const iconStyle = { color: "inherit", fontSize: "inherit" };

function Accessiblities({ isRow }) {
  const history = useHistory();
  const {
    state: { adminLogout },
  } = useContext(appContext);
  return (
    <Grid container spacing={2}>
      <Item
        name="Home"
        icon={<HomeIcon style={iconStyle} />}
        path="/"
        isRow={isRow}
      />
      <Item
        name="Manage Store"
        icon={<DirectionsBikeIcon style={iconStyle} />}
        path="/store"
        isRow={isRow}
      />

      <Item
        name="Manage Orders"
        icon={<FormatListBulletedIcon style={iconStyle} />}
        path="/all/orders"
        isRow={isRow}
      />
      <Item
        name="Manage Admin"
        icon={<AdminPanelSettingsIcon style={iconStyle} />}
        path="/admin/manage"
        isRow={isRow}
      />
      <Item
        name="All Reviews"
        icon={<ReviewsIcon style={iconStyle} />}
        path="/reviews"
        isRow={isRow}
      />
      <Item
        name="Logout"
        handleClick={() => adminLogout(history)}
        icon={<LogoutIcon style={iconStyle} />}
        isRow={isRow}
      />
    </Grid>
  );
}
export default Accessiblities;
