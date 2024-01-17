import clsx from "clsx";

interface LayoutGridProps {
  children: React.ReactNode;
  className?: string;
}

export const LayoutGrid = ({
  children,
  ...props
}: LayoutGridProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4",
        props.className
      )}
      data-testid="layout-grid
  "
      {...props}
    >
      {children}
    </div>
  );
};

export const LayoutDashboardGrid = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx("flex flex-col gap-8 h-full", props.className)}
      data-testid="layout-grid
  "
      {...props}
    >
      {children}
    </div>
  );
};
