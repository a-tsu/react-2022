import ky from 'ky';

export const fetch = async () => {
    return await ky.get('https://example.com',{
      retry: 2 
    }).json();
}