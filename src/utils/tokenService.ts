import { jwtDecode, JwtPayload } from 'jwt-decode';

const getToken = (): string | null => {
  return localStorage.getItem('token');
};

const isTokenExpired = (): boolean => {
  try {
    const decoded = decodeToken();
    if (decoded == null) return false;
    if (!decoded.exp) {
      return true;
    }
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Invalid token:', error);
    return true;
  }
};

const decodeToken = (): JwtPayload | null => {
  const token = getToken();
  if (token == null) return null;
  return jwtDecode<JwtPayload>(token);
};

export { getToken, isTokenExpired, decodeToken };
