import axios from 'axios';

const axiosConfig = axios.create({
	baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

axiosConfig.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		throw error;
	}
);

export default axiosConfig;
