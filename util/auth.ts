import axios from 'axios';

type mode = 'signInWithPassword' | 'signUp';

const API_KEY = 'AIzaSyDKlptjjDNYj9d3LaPONPxQUjpYxiaUF34';

export async function authenticate(mode: mode, email: string, password: string) {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(
    URL,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  )
  console.log(response.data);
}

export async function createUser(email: string, password: string) {
  await authenticate('signUp', email, password);
}

export async function login(email: string, password: string) {
  await authenticate('signInWithPassword', email, password);
}