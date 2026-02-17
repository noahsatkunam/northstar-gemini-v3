/**
 * Motion Components - Barrel Export
 *
 * Reusable animation wrapper components.
 *
 * @example
 * import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion";
 */

// AnimatedSection - Scroll-triggered fade-in wrapper
export {
  AnimatedSection,
  type AnimatedSectionProps,
} from "./AnimatedSection";

// StaggerContainer - Container for staggered child animations
export {
  StaggerContainer,
  type StaggerContainerProps,
} from "./StaggerContainer";

// StaggerItem - Individual staggered item wrapper
export {
  StaggerItem,
  type StaggerItemProps,
} from "./StaggerItem";

// CountUp - Scroll-triggered count-up animation
export { CountUp } from "./CountUp";
