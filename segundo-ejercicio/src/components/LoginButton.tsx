import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authSlice";
import type { RootState } from "../store/store";

function LoginButton() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = () => {
    dispatch(
      login({
        id: 1,
        name: "Ignacio",
        email: "ignacio@example.com",
      })
    );
  };

  const handleLogout = () => dispatch(logout());

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Bienvenido, {user?.name}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  );
}

export default LoginButton;
