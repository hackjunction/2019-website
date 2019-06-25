import axios from './axios';
import config from '../config';

const BASE_URL = config.API_BASE_URL + '/stats';

const StatsService = {
    getAll: () => {
        return axios.get(BASE_URL);
    }
};

export default StatsService;
