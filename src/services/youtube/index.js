import axios from "axios";

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/";
const YOUTUBE_API_KEY = "AIzaSyClI7xtTfNpwy6bgZqlrlwa-YlinwhXdDI";

const getPlaylistVideos = (part, playlistId) =>
  axios.get(
    `${YOUTUBE_API_URL}playlistItems?part=${part}&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
  );

const getPlaylistVideoData = (part, videoIds) =>
  axios.get(
    `${YOUTUBE_API_URL}videos?part=${part}&id=${videoIds}&maxResults=50&key=${YOUTUBE_API_KEY}`
  );

const getPlaylistVideoIds = (playListData) =>
  playListData
    .map(video => video.snippet.resourceId.videoId)
    .join();

const getYoutubeDuration = (durationYoutube) => {
  const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours = 0, minutes = 0, seconds = 0, time;

  if (reptms.test(durationYoutube)) {
    const matches = reptms.exec(durationYoutube);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);
    if (hours   < 10) {hours   = `0${hours}`}
    if (minutes < 10) {minutes = `0${minutes}`}
    if (seconds < 10) {seconds = `0${seconds - 1}`}
    time = `${hours > 0 ? `${hours}:` : ''}${minutes > 0 ? `${minutes}:` : ''}${seconds}`;
  }
  return (time);
};

export { getPlaylistVideos, getPlaylistVideoData, getPlaylistVideoIds, getYoutubeDuration };
