export const Btn = ({
  children,
  type,
}: {
  children: string;
  type: "default" | "secondary";
}) => {
  const classe = `${
    type == "default" ? "bg-zinc-700 text-white " : "text-zinc-800 "
  }`;

  return (
    <button
      className={`text-[14px] font-bold border border-black p-3 ${classe}`}
    >
      {children}
    </button>
  );
};
