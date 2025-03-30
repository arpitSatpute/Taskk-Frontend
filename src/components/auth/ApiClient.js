import axios from "axios";



const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    withCredentials: true
});

apiClient.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem('accessToken');

        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if(error.response && error.response.status === 401) {
            try {
                const refreshResponse = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}auth/refresh`, {}, { withCredentials: true });
                const newToken = refreshResponse.data.data.accessToken;
                localStorage.setItem('accessToken', newToken);

                error.config.headers.Authorization = `Bearer ${newToken}`;
                return apiClient.request(error.config);
            } catch (refreshError) {
                console.error('Unable to refresh token: ', refreshError);
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
)

export default apiClient;
