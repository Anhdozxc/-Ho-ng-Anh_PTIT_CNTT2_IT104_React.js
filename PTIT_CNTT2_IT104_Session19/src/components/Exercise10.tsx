import { memo, useState, useCallback } from "react";
type RowProps = {
  index: number;
  selected: boolean;
  onSelect: (i: number) => void;
};
const Row = memo(function Row({ index, selected, onSelect }: RowProps) {
  return (
    <tr style={{ backgroundColor: selected ? "white" : "transparent" }}>
      <td>{index}</td>
      <td>
        <button onClick={() => onSelect(index)}>
          {selected ? "Đang chọn" : "Chọn"}
        </button>
      </td>
    </tr>
  );
});
export default function LargeList() {
  const [selected, setSelected] = useState<number | null>(null);
  const handleSelect = useCallback((i: number) => {
    setSelected(i);
  }, []);
  return (
    <table>
      <tbody>
        {Array.from({ length: 100 }, (value, i) => (
          <Row
            key={i}
            index={i}
            selected={i === selected}
            onSelect={handleSelect}
          />
        ))}
      </tbody>
    </table>
  );
}
