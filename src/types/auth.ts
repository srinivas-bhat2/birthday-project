export type UserType = 'girlfriend' | 'friend' | null;

export interface User {
  username: string;
  type: UserType;
}

export interface LoginCredentials {
  username: string;
  password: string;
}