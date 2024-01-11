export const Equipments = (
  props: React.PropsWithChildren<{
    infos: { title: string }[];
  }>
) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 flex-1">
      {props.infos.map((info, index) => (
        <li key={index} className="text-md antialiased">
          {info.title}
        </li>
      ))}
    </ul>
  );
};
