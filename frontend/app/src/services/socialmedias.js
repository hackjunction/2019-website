import axios from './jsonAxios';

const URL = 'https://cms.www.hackjunction.com/api/socialmedias';

const SocialMediaService = {
    count: () => {
        return axios.get(`${URL}/count`);
    },

    getAll: () => {
        return axios.get(URL);
    },

    getOne: id => {
        return axios.get(`${URL}/${id}`);
    }
};

export default SocialMediaService;
