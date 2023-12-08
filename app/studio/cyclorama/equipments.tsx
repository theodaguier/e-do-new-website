import { infos } from "./data";

export const Equipments = () => {
  return (
    <div className="grid grid-cols-2">
      {infos.map((info, index) => (
        <p key={index} className="text-sm antialiased">
          {info.title}
        </p>
      ))}
    </div>
  );
};
