import React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <h1 style={{ color: "red" }}>{t("insideHome")}</h1>
      <button onClick={() => navigate("order-summary")}>
        {t("placeOrder")}
      </button>
    </>
  );
};

export default Home;
