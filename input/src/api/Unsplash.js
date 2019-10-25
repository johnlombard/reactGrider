import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ca27654405db608eeaf634a9403ace2a49fd1e9d6164d9f0c580d69f6d4bb529'
    }
});
