import { AnimatedTestimonials } from "./animated-testimonials";
import { GrAchievement } from "react-icons/gr";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Here's your chance to bring your creativity and coding expertise to life. Impress the judges with your innovative web solutions and stand a chance to win exciting prizes, exclusive goodies, and cash rewards of upto 30K!",
      name: "Sarah Chen",
      designation: "PRIZES : Grab your chance to win amazing rewards",
      src: "/img/nexus trophy.jpg",
    },
    {
      quote:
        "Registration for Nexus, organized by the IETE Club, is now open! Showcase your web development skills, tackle exciting challenges, and compete with like-minded enthusiasts.",
      name: "Michael Rodriguez",
      designation: " REGISTER NOW!",
      src: "/img/registration.jpg",
    }
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}