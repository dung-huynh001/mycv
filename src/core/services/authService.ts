import { Credentials } from '../models';
import * as request from '~/utils/request';

type LoginResponse = {
  token: string;
  user?: any; // Adjust type based on expected response structure
};

export const login = async (
  credentials: Credentials,
): Promise<LoginResponse> => {
  try {
    const response = await request.post<LoginResponse>(
      '/auth/login',
      credentials,
    );
    return response;
  } catch (error) {
    throw new Error('Login failed');
  }
};
