import React from "react";
import Slider from "react-slick";
import { Link } from "gatsby";

// Import css files
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import { Button, Card, Carousel, Icon, Text, View } from "wasabi-kit";
import {getPlaylistVideoData, getPlaylistVideoIds, getPlaylistVideos, getYoutubeDuration} from "../../services/youtube";
import VideoCard from "../VideoCard";
import VideoTime from "../VideoCard/styles";

const dimensions = {
  xs: { w: "100%", h: 240 },
  sm: { w: "100%", h: 285 },
  md: { w: "100%", h: 285 },
  lg: { w: "100%", h: 285 }
};

const dimensions2 = {
  xs: { w: 310, h: 210 },
  sm: { w: 310, h: 210 },
  md: { w: 385, h: 310 },
  lg: { w: 385, h: 310 }
};

const imgHeights = {
  xs: 180,
  sm: 180,
  md: 180,
  lg: 180
};

const PLAYLIST_ID = "PL5lPziO_t_Vgo38eyudKETCHOo29WCLqX";

class VideoSlider extends React.Component {
  state = {
    videos: []
  };

  componentDidMount() {
    getPlaylistVideos("snippet", PLAYLIST_ID)
      .then(playListRes =>
        getPlaylistVideoData("snippet,contentDetails", getPlaylistVideoIds(playListRes.data.items))
          .then(videosDataRes =>
            this.setState({
              videos: videosDataRes.data.items,
            })
          )
      )
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { videos } = this.state;
    return (
      <View
        container
        direction="column"
        style={{
          backgroundColor: "black",
          margin: "0 auto"
        }}
      >
        {videos.length > 0 &&
          <>
            {console.log(videos)}
            <Text type="h2">{videos[0].title}</Text>
            <Slider {...settings}>
              {videos.map(video => (
              <a key={video.id} target="_blank" href={`https://www.youtube.com/watch?v=${video.id}`}>
                <Card
                  cover={video.snippet.thumbnails.medium.url}
                  color="black"
                  clickable
                  dimensions={dimensions}
                  imgHeight={imgHeights}
                  styleCont={{padding: 0, margin: 0, position: 'relative'}}
                  style={{margin: 0}}
                >
                  <VideoTime justify="center" type="sashimi" width={80} round={6}>
                    <Text
                      style={{fontWeight: "bold", color: "white"}}
                      type="span"
                    >
                      {getYoutubeDuration(video.contentDetails.duration)}
                    </Text>
                  </VideoTime>
                </Card>
              </a>
              ))}
            </Slider>
          </>
        }
      </View>
    );
  }
}

export default VideoSlider;
