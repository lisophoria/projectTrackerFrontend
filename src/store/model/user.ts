export interface IUser {
  userId?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
}

export interface IUserWithPassword extends IUser {
  password?: string;
}

export interface IUserCredentials {
  email?: string;
  password?: string;
}

export interface IUserTokens {
  accessToken?: string;
  refreshToken?: string;
  userId?: number;
}
