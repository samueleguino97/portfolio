import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../stores/menu";
import classnames from "classnames";
function Logo() {
  const isOpen = useStore(isMenuOpen);
  console.log("LOGO RENDERED", isOpen);
  return (
    <a
      href="/"
      className={classnames(
        " left-1/2 -translate-x-1/2  duration-300   transition-all text-white",
        {
          ["translate-y-0 scale-[0.9]"]: !isOpen,
          ["translate-y-12 scale-1"]: !!isOpen,
          ["fixed"]: isOpen,
          ["absolute"]: !isOpen,
        }
      )}
    >
      <img src="assets/logo.svg" className="object-contain" />
      <span className=" tracking-widest absolute font-main text-[6px] -bottom-[6px] left-1/2 -translate-x-1/2">
        PIANISTA
      </span>
    </a>
  );
}

export default Logo;
