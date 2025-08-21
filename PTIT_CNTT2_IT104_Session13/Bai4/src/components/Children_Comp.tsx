interface ChildrenProps {
  name: string;
}
function Children_Comp({ name }: ChildrenProps) {
  return (
    <div>
      <h3>Họ và tên bên component con: {name}</h3>
    </div>
  );
}

export default Children_Comp;
