const postData = async (user, score) => {
  const send = await fetch("http://localhost:3000/profile ", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: user, score: score }),
  });
  let response = await send.json();
  return response;
};

const getData = async () => {
  const send = await fetch("http://localhost:3000/posts");
  const response = await send.json();
  return response;
};

module.exports = {
  postData: postData,
  getData: getData,
};
