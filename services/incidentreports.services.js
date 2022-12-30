export const createIncidentReports = async (token, newData, id) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/reports/create-report/" + id,
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
    if (res.status == 201) {
      return { success: true };
    }
    return { success: false };
  }
};

export const getIncidentReports = async (token) => {
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/reports",
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
