import axios from './axios';
import config from '../config/config';
const URL = config.API_BASE_URL + '/api/contactrequests';

const ContactRequestService = {
    create: formData => {
        return axios.post(URL, formData);
    }
};

export default ContactRequestService;
