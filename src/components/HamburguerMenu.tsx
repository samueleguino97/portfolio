import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../stores/menu";
import classnames from "classnames";

function HamburguerMenu() {
  const open = useStore(isMenuOpen);
  return (
    <div
      onClick={() => {
        isMenuOpen.set(!open);
      }}
      className={classnames(
        "h-4 w-6 lg:hidden cursor-pointer flex flex-col justify-between",
        {
          ["fixed"]: open,
        }
      )}
    >
      <div
        className={classnames(
          "w-full h-[2px] bg-white transition-all duration-300",
          {
            ["transform rotate-45 translate-y-[7px]  "]: !!open,
          }
        )}
      ></div>
      <div
        className={classnames(
          "w-full h-[2px] bg-white  transition-all duration-300",
          {
            ["opacity-0"]: !!open,
            ["opacity-100"]: !open,
          }
        )}
      ></div>
      <div
        className={classnames(
          "w-full h-[2px] bg-white  transition-all duration-300",
          {
            ["transform -rotate-45 -translate-y-[7px]"]: !!open,
          }
        )}
      ></div>
    </div>
  );
}

export default HamburguerMenu;
