import axios from 'axios';
import { baseUrl } from '../config';
import toast from 'react-hot-toast';

const todos = {
    getTodos: async () => {
        let response = null;
        try{
            response = axios.get(`${baseUrl}/api/todos`).then(response => response);
        }
        catch(error){
            toast.error('Error getting todos');
        }
        return response;
    }
}

export default todos;