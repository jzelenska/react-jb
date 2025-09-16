import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) return <p>Please log in first.</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.fullName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phoneNumber}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ProfilePage;
