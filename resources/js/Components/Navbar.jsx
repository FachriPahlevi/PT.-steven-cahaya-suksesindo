import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <div>{t("navbar.title")}</div>
      <div className="flex space-x-2">
        <a href="/lang/en" className="hover:underline">EN</a>
        <a href="/lang/id" className="hover:underline">ID</a>
      </div>
    </nav>
  );
}
