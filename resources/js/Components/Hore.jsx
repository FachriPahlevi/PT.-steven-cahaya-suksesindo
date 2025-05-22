import React from "react";
import { useTranslation } from "react-i18next";

export default function Hore() {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-10 text-2xl">
      {t("hero.welcome")}
    </div>
  );
}
