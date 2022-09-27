import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const value = useContext(AuthContext);

  return value;
}

// Esse hook é criado pra n precisarmos fazer duas  (useContext e AuthContext)
// de utilizar o contexto importações na hora
