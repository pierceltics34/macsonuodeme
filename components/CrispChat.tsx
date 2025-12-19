"use client";

import { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    // Crisp script yükleme
    if (typeof window !== "undefined") {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "5df1c797-ba2e-4483-92af-099baf33f47c";
      
      (function() {
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  }, []);

  return null;
}

// TypeScript için window tipi genişletme
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

