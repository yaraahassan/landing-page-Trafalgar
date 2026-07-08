import { jwtDecode } from "jwt-decode";
import { TokenService } from "./tokenService";

type TokenPayload = {
  id: string;
  email: string;
  role: string;
};

export const AuthService = {
  getUser() {
    const token = TokenService.getToken();

    if (!token) return null;

    try {
      return jwtDecode<TokenPayload>(token);
    } catch {
      return null;
    }
  },

  getRole() {
    return this.getUser()?.role || null;
  },

  isAuthenticated() {
    return !!TokenService.getToken();
  },
};