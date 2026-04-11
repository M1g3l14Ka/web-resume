import HomePage from "@/components/HomePage";
import { headerTiles, petTimelineData } from "@/data/data";

export default function Home() {
  return (
    <div className="relative">
      <HomePage
        headerTiles={headerTiles}
        projects={petTimelineData}
      />
    </div>
  );
}
