// Navbar.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NavigationItem {
  id: string;
  label: string;
}

interface NavbarProps {
  navigationItems: NavigationItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navigationItems }) => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 50;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          setActiveNavItem(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        Triveni 2k24
      </a>
      <nav>
        {navigationItems.map((item) => (
          <Link legacyBehavior href={`#${item.id}`} key={item.id}>
            <a className={activeNavItem === item.id ? "active" : ""}>
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
