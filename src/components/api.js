import { create } from 'apisauce';

const api = create({
    baseURL: 'https://stormy-atoll-30862.herokuapp.com',
    headers: { Accept: 'application/vnd.github.v3+json' },
})

export default api;