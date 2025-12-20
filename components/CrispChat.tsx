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
        s.onload = () => {
          // Crisp widget yüklendikten sonra özelleştirmeler
          if (window.$crisp) {
            // "Genellikle 2 saat içinde yanıt verir" metnini "Genellikle hemen cevap verir" olarak değiştir
            // Crisp widget'ı yüklendikten sonra DOM'u kontrol et ve metni değiştir
            setTimeout(() => {
              const crispWidget = document.querySelector('[data-crisp-widget]') || 
                                  document.querySelector('.crisp-client') ||
                                  document.querySelector('[id*="crisp"]');
              
              if (crispWidget) {
                // Crisp widget içindeki "2 saat" metnini bul ve değiştir
                const observer = new MutationObserver(() => {
                  const allTextNodes = document.createTreeWalker(
                    document.body,
                    NodeFilter.SHOW_TEXT,
                    null
                  );
                  
                  let node;
                  while (node = allTextNodes.nextNode()) {
                    if (node.textContent && node.textContent.includes("2 saat")) {
                      node.textContent = node.textContent.replace(/2 saat/g, "hemen");
                    }
                  }
                });
                
                observer.observe(document.body, {
                  childList: true,
                  subtree: true,
                  characterData: true
                });
              }
            }, 2000); // Widget yüklendikten 2 saniye sonra kontrol et
          }
        };
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

