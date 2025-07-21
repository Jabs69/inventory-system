import { api } from "../shared/api";

// interface credentials {

//   username:string;
//   password:string;

// }

type credentials = URLSearchParams;

const basePath = '/auth';

export const login = async (credentials: credentials) => api.post(`${basePath}/login`, credentials);

