export const postData = async (user, score) => {
  const send = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zgU632WsHpsxMoPC2L4Z/scores",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, score }),
    }
  );
  const response = await send.json();
  return response;
};

export const getData = async () => {
  const send = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zgU632WsHpsxMoPC2L4Z/scores");
  const response = await send.json();
  return response;
};
