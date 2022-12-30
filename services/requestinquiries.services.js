export const createInquiry = async (token, newData, id) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/requests/create-request/" + id,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": "VTBWRFVrVlVYMEZRU1Y5TFJWaz0=",
        "user-token": "Bearer " + token,
      },
      body: JSON.stringify(newData),
    }
  );
  if (res) {
    console.log(res.status);
    if (res.status == 201) {
      return { success: "true" };
    }
    return { success: "false" };
  }
};

export const getInquiry = async (token) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/requests",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": "VTBWRFVrVlVYMEZRU1Y5TFJWaz0=",
        "user-token": "Bearer " + token,
      },
    }
  );
  if (res) {
    return res.json();
  }
};
