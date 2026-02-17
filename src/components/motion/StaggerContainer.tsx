import * as React from "react";
import { cn } from "@/lib/utils";

export interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: any;
  staggerChildren?: number;
  delayChildren?: number;
  viewportAmount?: number;
  once?: boolean;
}

const StaggerContainer = React.forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    );
  }
);
StaggerContainer.displayName = "StaggerContainer";

export { StaggerContainer };
