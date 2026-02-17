import * as React from "react";
import { cn } from "@/lib/utils";

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Viewport amount required to trigger animation (0-1, default 0.2 = 20%) */
  viewportAmount?: number;
  /** Whether animation should only play once (default true) */
  once?: boolean;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** HTML element to render as (defaults to div) */
  as?: string;
  /** Custom variants are ignored in this simplified version */
  variants?: any;
}

const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({
    className,
    children,
    viewportAmount = 0.2,
    once = true,
    delay = 0,
    as: Component = "div",
    variants, // Ignored
    ...props
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => elementRef.current as HTMLDivElement);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        },
        {
          threshold: viewportAmount,
        }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [viewportAmount, once]);

    return (
      <div
        ref={elementRef}
        className={cn(
          "transition-all duration-700 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          className
        )}
        style={{ transitionDelay: `${delay}s` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AnimatedSection.displayName = "AnimatedSection";

export { AnimatedSection };
