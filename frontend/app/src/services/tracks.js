import axios from './axios';
import config from '../config';

const BASE_URL = config.API_BASE_URL + '/tracks';

const TracksService = {
    getAll: () => {
        return axios.get(BASE_URL);
    }
};

export default TracksService;