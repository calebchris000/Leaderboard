const postData = require('./api.js');

const print = async() => {
    const res = await postData();
    console.log(res)
}

print()