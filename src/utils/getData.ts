const api_key: string = 'ksjiDen2KX1gNc67jJT6d8GyZzdwdKVot9SQHdEx';
export const base_url: string = 'https://api.nasa.gov/planetary/apod';
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

// export default async function getData(params?: string) {
//   const url = new URL(base_url);
//   if (params) {
//     url.search = new URLSearchParams(params).toString();
//   }

//   const res = await fetch(`${url}?api_key=${api_key}`);

//   if (!res.ok) {
//     throw new Error(`Request failed with status ${res.status}`);
//   }

//   const data = await res.json();
//   return data;
// }
