const fetch = require('node-fetch');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        // Handle CORS preflight request
        return {
            statusCode: 200,
            headers: headers,
            body: ''
        };
    }

    const { code } = JSON.parse(event.body);
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    try {
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
        console.log('GitHub response data:', data);

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ access_token: data.access_token })
        };
    } catch (error) {
        console.error('Error fetching access token:', error);
        return {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

