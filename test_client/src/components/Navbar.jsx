import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './navbar.css'
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="bar">
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Menu</h2>
          </MenuItem>

          <MenuItem href="/home" icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem href="/user" icon={<PeopleOutlinedIcon />}>Users</MenuItem>
          <MenuItem href="/item" icon={<ReceiptOutlinedIcon />}>Items</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem href="/" icon={<LogoutIcon/>}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
    </div>
  );
}

export default Navbar;