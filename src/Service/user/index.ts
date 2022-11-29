import axios from 'axios';

interface userData {
	firstName: string;
	lastName: number;
}

export const getUser = async (params: { [key in string] }): Promise<userData> => {
	return axios
		.get('https://api.fake-rest.refine.dev/posts', { params })
		.then((res) => res.data)
		.catch((err) => err);
};
