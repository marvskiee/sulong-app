export const createUser = async (newData) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/users/create-user",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": "VTBWRFVrVlVYMEZRU1Y5TFJWaz0=",
      },
      body: JSON.stringify(newData),
    }
  );
  if (res) {
    console.log(res.status);
    if (res.status == 201) {
      return { success: true };
    } else {
      return { success: false, code: res.status };
    }
  }
};

export const loginUser = async (newData) => {
  const res = await fetch("https://distinct-shawl-frog.cyclic.app/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-key": "VTBWRFVrVlVYMEZRU1Y5TFJWaz0=",
    },
    body: JSON.stringify(newData),
  });
  if (res) {
    if (res.status == 200) {
      return { success: true, data: await res.json() };
    } else {
      return { success: false };
    }
  }
};
export const updateUser = async (id, newData, token) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/profile/" + id,
    {
      method: "PUT",
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
    if (res.status == 204) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
};
export const getUser = async (token) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/users/myProfile",
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
    if (res.status == 200) {
      return { success: true, data: await res.json() };
    } else {
      return { success: false };
    }
  }
};
