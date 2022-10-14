import { atom } from "nanostores";

export const isMenuOpen = atom(false);
export const menu = atom([
  { label: "Acerca De", href: "/about" },

  { label: "Bio", href: "/bio" },
  { label: "Servicios", href: "/services" },

  { label: "Videos", href: "/videos" },
  { label: "Contactar", href: "/contact" },
]);
