const fetch = require('node-fetch');

exports.handler = async (event) => {
    const { code } = JSON.parse(event.body);
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code: code
        })
    });

    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify({ access_token: data.access_token })
    };
};

