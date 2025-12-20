export function Dot({
  fromTop,
  children,
  time,
  position,
}: {
  fromTop: number;
  children: React.ReactNode;
  time: string;
  position: "left" | "right";
}) {
  const isLeft = position === "left";
  const sideTextClass = isLeft ? "left-10" : "right-10";
  const timeClass = isLeft ? "left-0" : "right-0";
  const alignClass = isLeft ? "justify-start" : "justify-end";

  return (
    <div
      style={{ top: `${fromTop}%` }}
      className="w-3 h-3 absolute -left-1 rounded-full bg-white"
    >
      <div
        className={`
          w-[40vw] content absolute top-1/2 -translate-y-1/2 flex
          ${sideTextClass} ${alignClass}
        `}
      >
        <div className="w-fit text-[14px] rounded-2xl p-5 pt-4 pb-4 text-(--text) bg-(--foreground)">
          {children}
        </div>

        <span
          className={`
            text-[15px] font-bold absolute -top-6
            text-(--foreground)
            ${timeClass}
          `}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

export function SubDot({
  fromTop,
  children,
  name,
  position,
}: {
  fromTop: number;
  children: React.ReactNode;
  name: string | React.ReactNode;
  position: "left" | "right";
}) {
  return (
    <div
      style={{ top: `${fromTop}%` }}
      className={`w-3 absolute -left-1 h-3 rounded-full bg-transparent`}
    >
      <div
        className={`
            content absolute w-[40vw] top-[50%] translate-y-[-50%]
            text-[15px] font-bold rounded-2xl
            ${position === "left" ? "left-10 text-left" : ""}
            ${position === "right" ? "right-10 text-right" : ""}
        `}
      >
        {name}
        <div
          className={`
            text-[14px] font-medium
            bg-[#00000028] p-6 pt-4 pb-4 rounded-2xl absolute -top-2
            text-(--foreground)
            ${position === "left" ? "text-left left-[100px]" : ""}
            ${position === "right" ? "text-right right-[120px]" : ""}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
