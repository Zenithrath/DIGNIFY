import type { Viewport } from "next";
import { THEME_KEY } from "./theme";

export const themeInit = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");var p=(t==="light"||t==="dark"||t==="system")?t:"light";var r=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;var d=document.documentElement;d.dataset.theme=r;d.style.colorScheme=r;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",r==="dark"?"#0b0b0b":"#f3f1ec");}catch(e){}})();`;

export const localeRedirect = `(function(){try{if(localStorage.getItem("dignify-lang"))return;var p=location.pathname;if(p!=="/")return;var langs=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]);for(var i=0;i<langs.length;i++){var l=(langs[i]||"").toLowerCase();if(l.indexOf("id")===0||l.indexOf("in")===0){location.replace("/id");return;}}}catch(e){}})();`;

export const baseViewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export const revealNoscript = `<style>.reveal-node { opacity: 1 !important; transform: none !important; }</style>`;
