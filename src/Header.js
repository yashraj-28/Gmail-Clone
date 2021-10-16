import React from "react";
import "./Header.css";
import Menu from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import { Apps, ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar className="avatar" src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
