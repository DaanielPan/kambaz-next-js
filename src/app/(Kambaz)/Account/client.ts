import axios from "axios";

// ⭐ create axios instance that sends cookies (green box)
const axiosWithCredentials = axios.create({ withCredentials: true });

// ⭐ FRONTEND environment variable for server URL
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

// ⭐ Build API base URL
export const USERS_API = `${HTTP_SERVER}/api/users`;

// ⭐ SIGNIN
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data;
};

// ⭐ PROFILE
export const profile = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/profile`
  );
  return response.data;
};

// ⭐ SIGNUP
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signup`,
    user
  );
  return response.data;
};

// ⭐ SIGNOUT
export const signout = async () => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signout`
  );
  return response.data;
};

// ⭐ UPDATE USER
export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};
