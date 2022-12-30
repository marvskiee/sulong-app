export const sendCode = async (newData) => {
  const res = await fetch("https://inquisitive-red-horse.cyclic.app/sendcode", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  if (res) {
    if (res.status == 201) {
      return { success: true };
    }
    return { success: false };
  }
};
export const checkEmail = async (newData) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/users/forgot-password",
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
    // console.log(res.json());
    if (res.status == 200) {
      return { success: true, data: await res.json() };
    }
    return { success: false };
  }
};

export const updatePassword = async (newData, id) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/users/forgot-password/" + id,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-key": "VTBWRFVrVlVYMEZRU1Y5TFJWaz0=",
      },
      body: JSON.stringify(newData),
    }
  );
  if (res) {
    // console.log(res.json());
    if (res.status == 200) {
      return { success: true, data: await res.json() };
    }
    return { success: false };
  }
};
