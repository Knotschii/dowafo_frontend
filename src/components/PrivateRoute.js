import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ loggedIn }) {
  return <div>{loggedIn ? <Outlet /> : <Navigate to="/login" />}</div>;
}
