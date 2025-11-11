export const API_BASE = import.meta.env.VITE_API_URL;
console.debug('[API_BASE]', API_BASE);


export const api =  {
  base: `${API_BASE}`,
  signIn: `${API_BASE}/signin`,
  register: `${API_BASE}/register`,
  image: `${API_BASE}/image`,
  clarifai: `${API_BASE}/api/clarifai/face-detect`
};