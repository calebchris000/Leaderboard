export const postData = async (user, score) => {
  const send = await fetch('http://localhost:3000/posts ', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, score }),
  });
  const response = await send.json();
  return response;
};

export const getData = async () => {
  const send = await fetch('http://localhost:3000/posts');
  const response = await send.json();
  return response;
};
