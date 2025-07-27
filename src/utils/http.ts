import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type Response<T = any> = {
  code?: number;
  message?: string;
  data?: T;
 [key: string]: any;
};

class Http {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.initInterceptors();
  }

  private initInterceptors() {
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 响应拦截
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Return the modified response object with only data, or cast appropriately
        return response.data; // This line causes the error because we're changing the return type
      },
      (error) => {
        console.error('请求失败：', error.message);
        return Promise.reject(error);
      }
    );
  }

  // 修改返回类型为 Promise<Response<T>> 而不是 Promise<AxiosResponse<T>>
  public get<T>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
    return this.instance.get(url, config).then(res => res);
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
    return this.instance.post(url, data, config).then(res => res);
  }

  // 其他方法...
}

const http = new Http({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;