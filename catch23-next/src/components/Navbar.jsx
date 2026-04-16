"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-left" ref={menuRef}>
        <div className="tooltip-wrap tooltip-right" data-tip="Menu">
          <button
            className="navbar-iconbtn"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>

        <div
          className="navbar-brand"
          onClick={() => router.push("/")}
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
              onClick={() => {
                setOpen(false);

                if (pathname === "/") {
                  window.location.href = "/";
                } else {
                  router.push("/");
                }
              }}
            >
              Home
            </button>

            <Link className="navmenu-item" href="/player" onClick={() => setOpen(false)}>
              Player Information
            </Link>
          </div>
        )}
      </div>

      <div className="tooltip-wrap tooltip-left" data-tip="View Profile">
        <button
          className="navbar-iconbtn"
          type="button"
          onClick={() => router.push("/profile")}
          aria-label="Profile"
        >
          <i className="fa-solid fa-user" />
        </button>
      </div>
    </header>
  );
}