import { HomeHero } from "@/components/HomeHero";
import { HomeMotivation } from "@/components/HomeMotivation";
import { HomeTechnology } from "@/components/HomeTechnology";
import { HomeImpact } from "@/components/HomeImpact";
import { ReadMoreCTA } from "@/components/ReadMoreCTA";

export default function Home() {
  return (
    <div className="space-y-16 pb-4">
      <HomeHero />
      <HomeMotivation />
      <HomeTechnology />
      <HomeImpact />
      <ReadMoreCTA />
    </div>
  );
}
