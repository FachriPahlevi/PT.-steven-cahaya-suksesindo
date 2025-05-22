import React, { useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Hore from "@/Components/Hore";


import { usePage } from "@inertiajs/react";
import i18n from "@/i18n";

export default function Home({ locale }) {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <div>
      <Navbar />
      <Hore/>
    </div>
  );
}
