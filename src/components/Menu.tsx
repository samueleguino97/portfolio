import { useStore } from "@nanostores/react";
import { isMenuOpen, menu } from "../stores/menu";
import classnames from "classnames";

function Menu() {
  const open = useStore(isMenuOpen);
  const links = useStore(menu);

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
