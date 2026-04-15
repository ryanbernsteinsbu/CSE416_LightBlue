import Navbar from "../../components/Navbar";
import UserProfile from "../../components/UserProfile";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="catch23">
        <UserProfile />
      </div>
    </>
  );
}