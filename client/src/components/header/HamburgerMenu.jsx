import React from "react";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Link, Button, MenuItem } from "@mui/material";

import { logout } from "../../utils/auth/Auth";
import Icon from "../icon/Icon";

import "../../styles/Header.scss";

const HamburgerMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="mobile-hamburger">
                <IconButton
                    aria-controls={open ? "account-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <Icon fill="#19608f" height="45" iconName="HAMBURGER" />
                </IconButton>
            </div>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                onClick={handleClose}
                onClose={handleClose}
                open={open}
                sx={{
                    background: "black",
                    opacity: "85%",
                    display: "flex",
                    justifyContent: "flexStart"
                }}
            >
                {/* ////////////////////////////////////////////// */}
                {/* START of the dropdown items inside the button */}
                {/* ////////////////////////////////////////////// */}
                <div className="mobile-list-hamburger mobile-menu-bold">
                    <Icon
                        className=" mobile-dropdown-icon"
                        fill="#19608f"
                        height="25"
                        iconName="LIST_DCSD"
                    />
                    Helpful Links
                </div>
                <MenuItem>
                    <Divider />
                    <Button
                        sx={{
                            color: "black",
                            display: "flex",
                            justifyContent: "flex-start"
                        }}
                    >
                        <div className="helpful-links-dropdown">
                            <MenuItem
                                sx={{
                                    alignItems: "start",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <div className="mobile-menu-links">
                                    <Icon
                                        fill="#19608f"
                                        height="15"
                                        iconName="LINK"
                                    />
                                    <a
                                        href="https://perfectforms.dcsdk12.org/PerfectFormsSSO/player.aspx"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Contact My Student(s) Nurse
                                    </a>
                                </div>
                                <div className="mobile-menu-links">
                                    <Icon
                                        fill="#19608f"
                                        height="15"
                                        iconName="LINK"
                                    />
                                    <a
                                        href="https://www.dcsdk12.org/cms/one.aspx?pageId=5758270"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Academic Calendars
                                    </a>
                                </div>
                                <div className="mobile-menu-links">
                                    <Icon
                                        fill="#19608f"
                                        height="15"
                                        iconName="LINK"
                                    />
                                    <a
                                        href="https://www.dcsdk12.org/cms/One.aspx?portalId=220484&pageId=5787115"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Parent Resources
                                    </a>
                                </div>
                                <div className="mobile-menu-links">
                                    <Icon
                                        fill="#19608f"
                                        height="15"
                                        iconName="LINK"
                                    />
                                    <a
                                        href="https://www.dcsdk12.org/cms/one.aspx?pageId=5759841"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Bus Routes
                                    </a>
                                </div>
                                <div className="mobile-menu-links">
                                    <Icon
                                        fill="#19608f"
                                        height="15"
                                        iconName="LINK"
                                    />
                                    <a
                                        href="https://www.myschoolbucks.com/ver2/getmain?requestAction=home"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Online Payments
                                    </a>
                                </div>
                                <div className="mobile-menu-links">
                                    <Icon
                                        fill="#19608f"
                                        height="15"
                                        iconName="LINK"
                                    />
                                    <a
                                        href="https://dcsd.nutrislice.com/menus-eula"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Lunch Menus
                                    </a>
                                </div>
                            </MenuItem>
                        </div>
                    </Button>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Link
                        aria-label="Home Page Link"
                        href="https://engaged.dcsdk12.org"
                        rel="noopener noreferrer"
                        sx={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <Icon
                            className="mobile-dropdown-icon"
                            fill="#19608f"
                            height="20"
                            iconName="HOME"
                        />
                        Dashboard
                    </Link>
                </MenuItem>
                <MenuItem
                    type="button"
                    onClick={logout}
                    onKeyDown={logout}
                    href="#"
                >
                    <Icon
                        className="mobile-dropdown-icon"
                        fill="#19608f"
                        height="25"
                        iconName="LOGOUT"
                    />
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default HamburgerMenu;
