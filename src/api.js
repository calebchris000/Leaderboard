export const postData = async (user, score) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bmzFv18I2hQKeUzUSOmy/scores',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, score }),
    },
  );
};

export const getData = async () => {
  const send = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bmzFv18I2hQKeUzUSOmy/scores',
  );
  const response = await send.json();
  return response;
};
