import { useEffect, useRef, useState } from "react";

export default function Navbar({
    onNavigate = () => { },
    onProfileClick = () => { },
}) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const onDocClick = (e) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target)) setOpen(false);
        };

        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    const go = (route) => {
        onNavigate(route);
        setOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-left" ref={menuRef}>
                <button
                    className="navbar-iconbtn"
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Menu"
                    aria-expanded={open}
                >
                    <i className="fa-solid fa-bars" />
                </button>

                <div
                    className="navbar-brand"
                    onClick={() => go("home")}
                    role="button"
                    tabIndex={0}
                >
                    CATCH 23
                </div>

                {open && (
                    <div className="navmenu" role="menu" aria-label="Navigation menu">
                        <button
                            className="navmenu-item"
                            type="button"
                            onClick={() => go("home")}
                            role="menuitem"
                        >
                            Home
                        </button>
                        <button
                            className="navmenu-item"
                            type="button"
                            onClick={() => go("player")}
                            role="menuitem"
                        >
                            Player Information
                        </button>
                    </div>
                )}
            </div>

            <button
                className="navbar-iconbtn"
                type="button"
                onClick={onProfileClick}
                aria-label="Profile"
            >
                <i className="fa-solid fa-user" />
            </button>
        </header>
    );
}