export const getAnnouncement = async (token) => {
  // console.log(token);
  // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVIjoiTVE9PSIsImlhdCI6MTY2OTIxNDg4OSwiZXhwIjoxNjY5MzAxMjg5fQ.iFtUYbYfUubjg6ADmv7SJJEWlYIb7hTRfgmbIWJZaAw`;
  const res = await fetch(
    "https://distinct-shawl-frog.cyclic.app/api/announcements/announcement",
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
    }
    return { success: false };
  }
};
