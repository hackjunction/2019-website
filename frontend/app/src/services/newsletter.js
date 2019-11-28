import axios from './axios';
import config from '../config/config';

// To use Junction newsletter: const URL = 'https://cms.www.hackjunction.com/api/newsletter';

//To use your own newsletter
const URL = config.API_BASE_URL + '/api/newsletter';

const NewsLetterService = {
    create: formData => {
        return axios.post(URL, formData);
    }
};

export default NewsLetterService;
