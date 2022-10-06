import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../stores/menu";
import classnames from "classnames";

const links = [
  { label: "Acerca De", href: "/about" },

  { label: "Bio", href: "/bio" },
  { label: "Servicios", href: "/services" },

  { label: "Videos", href: "/videos" },
  { label: "Contactar", href: "/contact" },
];
function Menu() {
  const open = useStore(isMenuOpen);

  return (
    <div
      className={classnames(
        "fixed bg-black/95 z-20 h-screen duration-300  w-full transition-all ",
        {
          ["opacity-0"]: !open,
          ["opacity-100"]: !!open,
          ["pointer-events-none"]: !open,
        }
      )}
    >
      <div className="flex flex-col pt-32 px-6 gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            className="text-white tracking-widest text-center uppercase font-normal text-2xl"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;
