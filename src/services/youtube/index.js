import axios from "axios";

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/";
const YOUTUBE_API_KEY = "AIzaSyClI7xtTfNpwy6bgZqlrlwa-YlinwhXdDI";

const getPlaylistVideos = (part, playlistId) =>
  axios.get(
    `${YOUTUBE_API_URL}playlistItems?part=${part}&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
  );

export { getPlaylistVideos };
