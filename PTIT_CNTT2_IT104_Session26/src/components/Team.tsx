import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return <p>teamId = {teamId}</p>;
}
