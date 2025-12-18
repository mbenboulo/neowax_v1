import { HomeHero } from "@/components/HomeHero";
import { HomeMotivation } from "@/components/HomeMotivation";
import { HomeTechnology } from "@/components/HomeTechnology";
import { HomeImpact } from "@/components/HomeImpact";

export default function Home() {
  return (
    <div className="space-y-16 pb-4">
      <HomeHero />
      <HomeMotivation />
      <HomeTechnology />
      <HomeImpact />
    </div>
  );
}
