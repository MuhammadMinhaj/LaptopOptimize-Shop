import { Box } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import appContext from "../../context/context";
import useAuth from "../../hooks/useAuth";
import style from "./style.module.css";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Store",
    path: "/store",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "FQAS",
    path: "/fqas",
  },
];

const Item = ({ name, path }) => (
  <Box component="li" className={style.navItem}>
    <Link to={path}>{name}</Link>
  </Box>
);
function Navbar() {
  const { user } = useAuth();
  const {
    state: {
      admin: { isLoggedIn },
    },
  } = useContext(appContext);
  return (
    <Box component="nav">
      <Box component="ul" className={style.nav}>
        {links.map(({ name, path }) => (
          <Item key={name} name={name} path={path} />
        ))}
        {user?.email && <Item name="Dashboard" path="/user/profile" />}
        {isLoggedIn && <Item name="Management" path="/admin/profile" />}
        {!user?.email && !isLoggedIn && (
          <Item name="Sign In" path="/user/login" />
        )}
      </Box>
    </Box>
  );
}
export default Navbar;
