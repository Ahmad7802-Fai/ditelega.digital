// src/modules/clients/components/client-grid.tsx
import ClientCard from "./client-card";
import { clients } from "../data";

export default function ClientGrid() {
  return (
    <div className="
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-10 lg:gap-12 mt-20
    ">
      {clients.map((item, i) => {
        const isHero = i === 0;

        return (
          <div
            key={i}
            className={`
              ${isHero ? "md:col-span-2" : ""}
            `}
          >
            <ClientCard {...item} isHero={isHero} />
          </div>
        );
      })}
    </div>
  );
}