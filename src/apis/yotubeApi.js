import axios from 'axios';


const KEY = 'AIzaSyALUbff1fgAC6sgfFtt-fBc3K4TqmsE4F0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: KEY
    }
})