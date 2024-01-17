import clsx from "clsx";

export const Container = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        "container flex flex-col w-full min-h-screen my-24 gap-4",
        props.className
      )}
      data-testid="container"
      {...props}
    >
      {children}
    </div>
  );
};
