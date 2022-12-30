export const getNotification = async (token) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/notifications/all",
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
    if (res.status == 201) {
      return { success: true, data: await res.json() };
    } else {
      return { success: false };
    }
  }
};

export const updateNotification = async (id, token, newData) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/notifications/update/" + id,
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
    if (res.status == 200) {
      return { success: true, data: await res.json() };
    } else {
      return { success: false };
    }
  }
};

export const createNotifications = async (newData, token) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/notifications/create",
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
      return { success: true };
    } else {
      return { success: false, code: res.status };
    }
  }
};

export const readNotification = async (token, newData) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/notifications/update",
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
    if (res.status == 200) {
      return { success: true, data: await res.json() };
    } else {
      return { success: false };
    }
  }
};
