import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const BASE_URL = 'https://sportsbook-api2.p.rapidapi.com';
const BASE_URL_LOCAL =
  process.env.BASE_URL_SERVIDOR || 'http://192.168.0.6:3000/api';

const headers = {
  'x-rapidapi-host': 'sportsbook-api2.p.rapidapi.com',
  'x-rapidapi-key': process.env.RAPIDAPI_KEY ?? '',
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface RequestProps {
  endpoint: string;
  method: HttpMethod;
  body?: any;
  reqOptions?: RequestInit;
}

interface ApiServiceProps extends RequestProps {
  isClient?: boolean;
}

export async function apiService<T = any>({
  endpoint,
  method = 'GET',
  body,
  reqOptions,
  isClient,
}: ApiServiceProps): Promise<T> {
  const session = await getSession();
  const token = session?.accessToken;

  const options: RequestInit = {
    method,
    ...reqOptions,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...reqOptions?.headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const urlBase = isClient ? BASE_URL_LOCAL : BASE_URL;

  const response = await fetch(`${urlBase}${endpoint}`, options);

  if (!response.ok) {
    redirect('/');
  }

  return response.json();
}

export async function apiChamadaServer<T = any>(
  props: RequestProps
): Promise<T> {
  return apiService<T>({ ...props, isClient: false });
}

export async function apiChamadaClient<T = any>(
  props: RequestProps
): Promise<T> {
  const isClient: boolean = true;
  return apiService<T>({ ...props, isClient });
}
