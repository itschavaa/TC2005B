// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCtwDnrrp-alSTMaglbG6L8pCjy0OG58EIG0KOChoKdJx1xHLbJRI9dg0oFU1ACFiKUubH-QUH3JWKDp337xUCrXENvVnuzsPHyaL3vH-aSZNKElYsuLchnrDxdtbYsMFdNbBHfCVsG013-Oqou3DfWvkchqUHLBAAOC7afwT8itakQ213LDxXpvlvqqrhebH1eoZLQQNGoeq6HbazqvJZiIKf3xsz3TwitshHrz2i-DzLU5xJDZpCX73BG-QnPtNNLWybkQqAd6NeL3A5r05alKPi4tmDpNnJk4wf5D_fZ19C5GN_3iAyetg3eOQa8qIDc87DdvuWCcmEllRHvmg8fuc7iG2SfuFgbRlfMh2oKQkA';
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
        'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
    )).items;
}

const topTracks = await getTopTracks();
console.log(
    topTracks?.map(
        ({name, artists}) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
);