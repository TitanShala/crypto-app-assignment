import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ServerError = { message: string };

export interface AxiosRequestOptions<D> extends AxiosRequestConfig<D> {
  excludeAuthentication?: boolean;
}

export interface SuccessResponse {
  message: string;
}

const domain = '';

export async function apiRequest<D = {}, R = unknown>({
  url,
  method,
  data,
  params,
}: AxiosRequestOptions<D>) {
  return await Axios.request<D, AxiosResponse<R>>({
    url: `${domain}/${url}`,
    method,
    data,
    params,
  });
}
