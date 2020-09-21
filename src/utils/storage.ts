import { IUser } from 'src/store/auth/type';

export const setUser = (data: { user: IUser, token: string }) => {
  const { user, token } = data;
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export const unsetUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export const getUser = (): IUser | undefined => {
  try {
    const user = localStorage.getItem('user');
    if (user)
      return JSON.parse(user);
  } catch (error) {
    throw error;
  }
}

export const getToken = (): string | null => {
  try {
    return localStorage.getItem('token');
  } catch (error) {
    throw error;
  }
}