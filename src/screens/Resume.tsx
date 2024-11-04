import { useParams } from "react-router-dom";

export default function Resume() {
  const { resumeId } = useParams();

  return (
    <div>
      <p>resume Id: {resumeId}</p>
    </div>
  );
}
