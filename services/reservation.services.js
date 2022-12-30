export const createReservation = async (token, newData, id) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/reservations/create-reservation/" +
      id,
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

export const getReservation = async (token) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/reservations",
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
