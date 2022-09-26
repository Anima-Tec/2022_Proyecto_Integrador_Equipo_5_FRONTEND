/* import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

type ProtectedRouteType = {
  roleRequired?: "patient" | "doctor",
};

export default function ProtectedRoute(props: ProtectedRouteType) {
  const auth = useAuth();

  if (props.roleRequired) {
    return auth.isLogged() ? (
      props.roleRequired === auth.user.role ? (
        <Outlet />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth.isLogged() ? <Outlet /> : <Navigate to="/login" />;
  }
} */
