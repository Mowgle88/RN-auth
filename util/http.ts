import axios from 'axios';

export async function fetchMessage(token: string) {
  const response = await axios.get(
    `https://rn-expense-tracker-app-default-rtdb.firebaseio.com/expenses.json?auth=${token}`
  );
  return JSON.stringify(response.data);
}