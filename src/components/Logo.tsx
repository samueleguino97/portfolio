import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../stores/menu";
import classnames from "classnames";
function Logo() {
  const isOpen = useStore(isMenuOpen);
  return (
    <a
      href="/"
      className={classnames(
        " left-1/2 -translate-x-1/2 lg:scale-150 lg:translate-y-5 duration-300   transition-all text-white",
        {
          ["translate-y-0 scale-80"]: !isOpen,
          ["translate-y-12 scale-100"]: !!isOpen,
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
