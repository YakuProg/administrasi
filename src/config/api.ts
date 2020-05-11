const isDev = false;

const URL = isDev ? 'http://localhost:8089' : 'http://34.87.96.194'

export const LOGIN = `${URL}/auth/login`
export const PAYMONEY = `${URL}/cashbank/paymoney/save-data`
export const RECEIVEMONEY = `${URL}/cashbank/receivemoney/save-data`