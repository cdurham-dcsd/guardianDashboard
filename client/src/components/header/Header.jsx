import React, { useState } from "react";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import { logout } from "../../utils/auth/Auth";
import UserDetails from "../../utils/UserDetails";
import Icon from "../icon/Icon";
import HamburgerMenu from "./HamburgerMenu";

import "../../styles/Header.scss";

/**
 * This is returning the header content with buttons and links
 * @name Header
 * @return {JSX.Element}
 */
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    // UserDetails is returning an object with keys, name, employeeNumber,
    // givenName, displayName, email, surname, uid, category, position, etc.
    const { givenName, surname } = UserDetails();

    // This is for the @mui dropdown "Helpful Links"
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="header-container">
            <div className="header-dcsd-icon">
                <Link
                    aria-label="Guardian Dashboard Page Link"
                    href="https://engaged.dcsdk12.org"
                    rel="noopener noreferrer"
                    sx={{
                        textDecoration: "none",
                        color: "black"
                    }}
                >
                    <Icon
                        fill="#19608f"
                        height="60"
                        iconName="DCSD"
                        width="60"
                    />
                </Link>
            </div>
            <div className="header-right">
                <div className="header-name-container">
                    <h5>
                        Welcome, {givenName} {surname}
                    </h5>
                </div>

                <div className="nav-button-container">
                    {/*
                    /////////////////////////////////////////////////////////////////////
                    this is where the "Helpful Links" dropdown button STARTS (from @mui)
                    */}
                    <div className="btn-primary m-2 nav-button-links nav-button-links color-override">
                        <Button
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            id="basic-button"
                            onClick={handleClick}
                            sx={{
                                color: "white",
                                fontFamily: "Montserrat"
                            }}
                        >
                            Helpful Links
                            <span>
                                <Icon
                                    fill="white"
                                    className="nav-button-icon"
                                    height="20"
                                    iconName="LIST_DCSD"
                                />
                            </span>
                        </Button>
                    </div>
                    <Menu
                        anchorEl={anchorEl}
                        id="basic-menu"
                        MenuListProps={{
                            "aria-labelledby": "basic-button"
                        }}
                        onClose={handleClose}
                        open={open}
                        sx={{
                            background: "black",
                            opacity: "80%"
                        }}
                    >
                        <a
                            href="https://perfectforms.dcsdk12.org/PerfectFormsSSO/player.aspx"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    color: "#19608f",
                                    opacity: "100%"
                                }}
                            >
                                <Icon
                                    iconName="LINK"
                                    fill="#19608f"
                                    height="15"
                                />
                                Contact My Student(s) Nurse
                            </MenuItem>
                        </a>
                        <a
                            href="https://www.dcsdk12.org/cms/one.aspx?pageId=5758270"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    color: "#19608f",
                                    opacity: "100%"
                                }}
                            >
                                <Icon
                                    fill="#19608f"
                                    height="15"
                                    iconName="LINK"
                                />
                                Academic Calendars
                            </MenuItem>
                        </a>
                        <a
                            href="https://www.dcsdk12.org/cms/One.aspx?portalId=220484&pageId=5787115"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    color: "#19608f",
                                    opacity: "100%"
                                }}
                            >
                                <Icon
                                    fill="#19608f"
                                    height="15"
                                    iconName="LINK"
                                />
                                Parent Resources
                            </MenuItem>
                        </a>
                        <a
                            href="https://www.dcsdk12.org/cms/one.aspx?pageId=5759841"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    color: "#19608f",
                                    opacity: "100%"
                                }}
                            >
                                <Icon
                                    fill="#19608f"
                                    height="15"
                                    iconName="LINK"
                                />
                                Bus Routes
                            </MenuItem>
                        </a>
                        <a
                            href="https://www.myschoolbucks.com/ver2/getmain?requestAction=home"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    color: "#19608f",
                                    opacity: "100%"
                                }}
                            >
                                <Icon
                                    fill="#19608f"
                                    height="15"
                                    iconName="LINK"
                                />
                                Online Payments
                            </MenuItem>
                        </a>
                        <a
                            href="https://dcsd.nutrislice.com/menus-eula"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <MenuItem
                                onClick={handleClose}
                                sx={{
                                    color: "#19608f",
                                    opacity: "100%"
                                }}
                            >
                                <Icon
                                    fill="#19608f"
                                    height="15"
                                    iconName="LINK"
                                />
                                Lunch Menus
                            </MenuItem>
                        </a>
                    </Menu>
                    {/*
                    this is where the "Helpful Links" dropdown button ENDS (from @mui)
                    /////////////////////////////////////////////////////////////////////
                    */}
                    <a
                        aria-label="Home Page Link"
                        className="btn btn-primary m-2 color-override"
                        href="https://engaged.dcsdk12.org"
                        rel="noopener noreferrer"
                    >
                        <span className="nav-button-text">
                            DASHBOARD
                            <Icon
                                className="nav-button-icon"
                                fill="white"
                                height="20"
                                iconName="HOME"
                            />
                        </span>
                    </a>
                    <button
                        aria-label="Logout Button"
                        className="btn btn-primary m-2 color-override"
                        onClick={logout}
                        onKeyDown={logout}
                        type="button"
                    >
                        <span className="nav-button-text">
                            LOGOUT
                            <Icon
                                className="nav-button-icon"
                                fill="white"
                                height="20"
                                iconName="LOGOUT"
                                onClick={logout}
                                onKeyDown={logout}
                            />
                        </span>
                    </button>
                </div>
                <HamburgerMenu />
            </div>
        </nav>
    );
};

export default Header;
