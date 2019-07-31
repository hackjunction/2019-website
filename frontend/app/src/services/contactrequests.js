import axios from './axios';

const URL = 'cms.www.hackjunction.com/api/contactrequests';

const ContactRequestService = {
    create: formData => {
        return axios.post(URL, formData);
    }
};

export default ContactRequestService;
