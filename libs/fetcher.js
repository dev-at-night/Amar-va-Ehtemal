export const fetcher = async (url, data) => {
  return fetch(`/api/${url}`, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status > 399 || res.status < 200) {
      throw new Error();
    }
    return res.json();
  });
};
