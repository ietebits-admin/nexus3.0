import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { TimelineDemo } from "@/components/TimelineDemo";

export default function Home() {
  return (
    <div>
      {/*  */}
      <HeroScrollDemo />
      {/* <AnimatedTestimonialsDemo /> */}
      <TimelineDemo />
      <InfiniteMovingCardsDemo />
    </div>
  );
}

