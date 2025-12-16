import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { NotificationContext } from "../contexts/NotificationContext";

export default function Header() {
  const { language } = useContext(LanguageContext);
  const { notifications } = useContext(NotificationContext);

  return (
    <h3>
      Bahasa: {language} | Notifikasi: {notifications}
    </h3>
  );
}
