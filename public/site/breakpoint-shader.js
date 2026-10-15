import React from "react";
import { createRoot } from "react-dom/client";
import { GrainGradient } from "https://esm.sh/@paper-design/shaders-react@0.0.80?external=react";
import { isMotionPaused } from "./breakpoint.js";

// Keep the complete inline textured flag behind the complete live composite.
// The SDK's initialization marker precedes its first resize/draw, so wait for
// a decoded flag image, explicit canvas dimensions and two paint frames before
// exposing the live flag. Failures leave the inline textured fallback visible.
function revealAfterFirstFrame(host, flagSource) {
  let firstFrame;
  let secondFrame;
  let imageReady = false;
  let handoffStarted = false;
  let contextLost = false;
  let watchedCanvas;
  const observer = new MutationObserver(prepareHandoff);

  function prepareHandoff() {
    const canvas = host.querySelector("[data-paper-shader] canvas");
    if (canvas && canvas !== watchedCanvas) {
      watchedCanvas = canvas;
      canvas.addEventListener("webglcontextlost", () => {
        contextLost = true;
        cancelAnimationFrame(firstFrame);
        cancelAnimationFrame(secondFrame);
        host.classList.remove("is-ready");
        observer.disconnect();
      }, { once:true });
    }
    if (contextLost || handoffStarted || !imageReady || !canvas?.hasAttribute("width") || !canvas.hasAttribute("height") || !canvas.width || !canvas.height) return;
    handoffStarted = true;
    observer.disconnect();
    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        if (!host.isConnected || !host.contains(canvas)) return;
        host.classList.add("is-ready");
        if ([...document.querySelectorAll(".flag-live")].every(flag => flag.classList.contains("is-ready"))) {
          document.dispatchEvent(new Event("breakpoint-flags-ready"));
        }
      });
    });
  }

  observer.observe(host, { childList:true, subtree:true, attributes:true, attributeFilter:["data-paper-shader", "width", "height"] });
  const flagImage = new Image();
  flagImage.src = flagSource;
  flagImage.decode().then(() => {
    imageReady = true;
    prepareHandoff();
  }).catch(() => observer.disconnect());
}

const flagSources = [
  ["germany-shader", "/images/breakpoint/germany-flag.svg"],
  ["uk-shader", "/images/breakpoint/uk-flag.svg"]
];
const countries = document.documentElement.classList.contains("flags-fallback") ? [] : flagSources.map(([id, flagSource]) => {
  const host = document.getElementById(id);
  revealAfterFirstFrame(host, flagSource);
  return createRoot(host);
});

function renderAtmosphere() {
  const speed = isMotionPaused() || document.hidden || document.documentElement.classList.contains("flags-fallback") ? 0 : .65;
  for (const root of countries) {
    root.render(React.createElement(GrainGradient,{
      colorBack:"#030303", colors:["#ffffff","#69665e","#181818","#f3f0e7"], softness:.46, intensity:.9,
      noise:.06, shape:"corners", offsetX:0, offsetY:0, scale:1, rotation:0, speed,
      style:{ width:"100%", height:"100%" }
    }));
  }
}

renderAtmosphere();
document.addEventListener("breakpoint-motion-change", renderAtmosphere);
document.addEventListener("visibilitychange", renderAtmosphere);
document.addEventListener("breakpoint-flags-fallback", renderAtmosphere);
