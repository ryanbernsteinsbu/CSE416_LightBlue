import Navbar from "../../components/Navbar";
import PlayerInformation from "../../components/PlayerInformation";

export default function PlayerPage() {
  return (
    <>
     <Navbar />
      <div className="catch23">
        <PlayerInformation />
      </div>
    </>
  );
}