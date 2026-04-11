"use client";

import { useState } from "react";
import PortfolioCard from "./portfolio-card";
import PortfolioFilter from "./portfolio-filter";
import { portfolio } from "../data";

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === active);

  return (
    <>
      <PortfolioFilter active={active} setActive={setActive} />

      <div className="
        grid md:grid-cols-2 lg:grid-cols-3
        gap-12 mt-16
        ">
        {filtered.map((item, i) => (
          <PortfolioCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}