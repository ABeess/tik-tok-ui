import axiosConfig from '@/utils/axiosConfig';

export const search = (query, type = 'less') => {
	return axiosConfig.get(`users/search`, {
		params: {
			q: query,
			type,
		},
	});
};
