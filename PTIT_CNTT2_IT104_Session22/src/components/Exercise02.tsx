import { Input } from "antd";

export default function Exercise02() {
  return (
    <div className="flex flex-col gap-3 w-[420px]">
      <Input size="large" placeholder="Input cỡ lớn" />
      <Input placeholder="Input cỡ trung bình" />
      <Input size="small" placeholder="Input cỡ bé" />
    </div>
  );
}
