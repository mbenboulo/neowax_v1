import { ReadMoreIntro } from "@/components/ReadMoreIntro";
import { ReadMoreOverview } from "@/components/ReadMoreOverview";
import { ReadMoreProblem } from "@/components/ReadMoreProblem";
import { ReadMoreInnovative } from "@/components/ReadMoreInnovative";
import { ReadMoreImpact } from "@/components/ReadMoreImpact";
import { ReadMoreCTA } from "@/components/ReadMoreCTA";

export default function ReadMorePage() {
  return (
    <div className="space-y-14 pb-4">
      <ReadMoreIntro />
      <ReadMoreOverview />
      <ReadMoreProblem />
      <ReadMoreInnovative />
      <ReadMoreImpact />
      <ReadMoreCTA />
    </div>
  );
}
