
import { Link } from "react-router-dom";
import "./Navbar.scss"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";
function Navbar() {

    const [open, setOpen] = useState(false)

    const { currentUser } = useContext(AuthContext);
    const fetch = useNotificationStore((state) => state.fetch);
    const number = useNotificationStore((state) => state.number);
    // console.log(number);
    if(currentUser) fetch();
    return (
        <nav>

            <div className="left">
                <a href="/" className="logo">

                    <img src="/logo.png" alt="" />
                    <span>LamaEstate</span>
                </a>

                <a href="/">Home</a>
                <a href="/list">List</a>
                <a href="/">Contact</a>
                <a href="/profile">Profile</a>

            </div>
            <div className="right">
                {currentUser ? (<div>

                    <div className="user">
                        <img
                            src={currentUser.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                            alt=""
                        />

                        <span>{currentUser.username}</span>
                        <Link to="/profile" className="profile">
                            {number > 0 && <div className="notification">{number}</div>}
                            <span>Profile</span>
                        </Link>
                    </div>


                </div>) : (
                    <>
                        <a href="/login">Sign in</a>
                        <a href="/register" className="register">Sign up</a>
                    </>
                )
                }
                <div className="menuIcon">
                    <img src="/menu.png" onClick={() => setOpen((prev) => !prev)} alt="" />
                </div>

                <div className={open ? "menu active" : "menu"} >
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/login">Sign in</a>
                    <a href="/register">Sign up</a>
                </div>

            </div>
        </nav>

    )
}

export default Navbar;