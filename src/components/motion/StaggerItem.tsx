import * as React from "react";
import { cn } from "@/lib/utils";

export interface StaggerItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: any;
  duration?: number;
}

const StaggerItem = React.forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    );
  }
);
StaggerItem.displayName = "StaggerItem";

export { StaggerItem };
