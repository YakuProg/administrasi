interface Response {
  data: {
    code: number,
    message: string
  }
}

export function handleResponse(response: Response) {
  const { data } = response
  const { code } = data;
  if (code === 401) {
    return {
      statusLogout: true,
      data
    } 
  } else {
    return {
      statusLogout: false,
      data
    } 
  }
}