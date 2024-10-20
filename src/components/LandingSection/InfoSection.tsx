import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description: ReactNode;
};
export function InfoSection(props: Props) {
  return (
    <div className="py-6 flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{props.title}</h1>
      <div className="flex flex-col gap-2">{props.description}</div>
    </div>
  );
}
