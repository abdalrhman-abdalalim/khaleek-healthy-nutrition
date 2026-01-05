export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterResponse {
  message: string;
  data: {
    access_token: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  };
}
