export interface LoginResponse {
  login: true;
  user?: {
    _id: string;
    email: string;
    password: string;
    username: string;
  };
}
