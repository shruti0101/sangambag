"use client";
import { useEffect } from "react";

export default function TranslateButton() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    document.body.appendChild(script);
  }, []);

  const translateToHindi = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = "hi";
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* hidden google dropdown */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* your button */}
      
    </>
  );
}