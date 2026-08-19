import type { Viewport } from "next";
import { THEME_KEY } from "./theme";

export const themeInit = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");var p=(t==="light"||t==="dark"||t==="system")?t:"light";var r=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;var d=document.documentElement;d.dataset.theme=r;d.style.colorScheme=r;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",r==="dark"?"#0b0b0b":"#f3f1ec");}catch(e){}})();`;

export const baseViewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export const revealNoscript = `<style>.reveal-node { opacity: 1 !important; transform: none !important; }</style>`;
