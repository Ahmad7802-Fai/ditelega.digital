"use client";

import { useState } from "react";
import { portfolio } from "../data";
import PortfolioCard from "../components/portfolio-card";
import PortfolioFilter from "./filter";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <>
      <PortfolioFilter active={filter} setActive={setFilter} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filtered.map((item, i) => (
          <PortfolioCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}