const readJSON = (response) => {
  return response.json();
};

const readText = (response) => {
  return response.text();
};

const handleErrorResponse = async (response) => {
  const errorMessage = await readText(response);
  throw new Error(errorMessage);
};

const handleResponse = (response) => {
  if (!response.ok) {
    return handleErrorResponse(response);
  }

  const contentType = response.headers.get("content-type");

  if (contentType && contentType.indexOf("application/json") !== -1) {
    return readJSON(response);
  } else {
    return readText(response);
  }
};

export const postRequest = async (url, data) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  return fetch(`https://hackathon-ascendum.ue.r.appspot.com/v1/api${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse);
};
