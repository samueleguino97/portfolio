import { atom } from "nanostores";

export const isMenuOpen = atom(false);
export const menu = atom([
  { label: "Acerca De", href: "/about" },

  { label: "Bio", href: "/bio" },
  { label: "Servicios", href: "/services" },

  { label: "Videos", href: "/videos" },
  { label: "Contactar", href: "/contact" },
]);
export const embedURl = (url: string, autoplay?: boolean) => {
  var id = url.split("?v=")[1]; //sGbxmsDFVnE

  var embedlink =
    "http://www.youtube.com/embed/" + id + (autoplay ? "?autoplay=1" : "");
  return embedlink;
};
