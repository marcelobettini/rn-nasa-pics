const api_key: string = 'ksjiDen2KX1gNc67jJT6d8GyZzdwdKVot9SQHdEx';
const base_url: string = 'https://api.nasa.gov/planetary/apod';
export default async function getData(params?: string) {
  try {
    const res = await fetch(
      `${base_url}?api_key=${api_key}${
        typeof params !== 'undefined' && params.length > 0 ? params : ''
      }`,
    );
    const data: Promise<any> = res.json();
    // return data;
    return Promise.resolve(data);
  } catch (error) {
    // return error;
    return Promise.reject(error);
  }
}
