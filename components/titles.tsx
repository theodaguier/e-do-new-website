import clsx from "clsx";

interface TitleProps {
  className?: string;
  textColor?: string;
  padding?: boolean;
  children: React.ReactNode;
}

export const Title = (props: TitleProps) => {
  return (
    <h1
      className={clsx(
        "font-abc-favorit-regular text-6xl antialiased",
        props.textColor && `text-${props.textColor}`,
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};

export const Paragraph = (props: TitleProps) => {
  return (
    <p
      className={clsx(
        "font-abc-favorit text-base md:text-lg lg:text-2xl antialiased",
        props.textColor && `text-${props.textColor}`,
        props.padding && "py-4 sm:py-4 md:py-6 lg:py-8",
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export const Caption = (props: TitleProps) => {
  return (
    <p
      className={clsx(
        "font-abc-favorit text-xs md:text-base lg:text-lg antialiased",
        props.textColor && `text-${props.textColor}`,
        props.padding && "py-4 sm:py-4 md:py-6 lg:py-8",
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export const Subtitle = (props: TitleProps) => {
  return (
    <h2
      className={clsx(
        "font-abc-favorit-regular antialiased  text-lg sm:text-lg md:text-xl lg:text-2xl",
        props.textColor && `text-${props.textColor}`,
        props.className
      )}
    >
      {props.children}
    </h2>
  );
};
