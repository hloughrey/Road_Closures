import axios from 'axios';

async function getPhotos(req, res) {
    try {
        const result = await axios.get(
            'https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=4c6d67b54e2fead12542fcec8565471f&user_id=186987032%40N05&format=json&nojsoncallback=1&auth_token=72157713135145528-1e7d7302e10f0e2c&api_sig=0852fd9501df9d3c113049d2f19b6691'
        );
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    res.json({ data: 'success' });
}

export { getPhotos };
