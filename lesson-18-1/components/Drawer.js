import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Drawer.module.css";

export default function Drawer() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "🏠 Főoldal" },
    { href: "/profile", label: "👤 Profil" },
    { href: "/settings", label: "⚙️ Beállítások" },
  ];

  return (
    <>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen(true)}
        aria-label="Menü megnyitása"
      >
        ☰
      </button>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      <nav className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
          aria-label="Menü bezárása"
        >
          ✕
        </button>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  router.pathname === item.href ? styles.active : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

