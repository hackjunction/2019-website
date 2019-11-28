import axios from './axios';
import config from '../config/config';

//Set the URL for Social medias
//Junction Socialmedia links: const URL = 'https://cms.www.hackjunction.com/api/socialmedias';

//Get links from CMS:
const URL = config.API_BASE_URL + '/api/socialmedias';

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
