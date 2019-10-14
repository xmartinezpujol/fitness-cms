import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import { Button, Card, Icon, Text, View } from "wasabi-kit";
import { getPlaylistVideos } from "../../services/youtube";

const dimensions = {
  xs: { w: 210, h: 240 },
  sm: { w: 265, h: 285 },
  md: { w: 265, h: 285 },
  lg: { w: 265, h: 285 }
};

const imgHeights = {
  xs: 130,
  sm: 165,
  md: 165,
  lg: 165
};

const PLAYLIST_ID = "PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84";

class VideoSlider extends React.Component {
  state = {
    videos: []
  };

  componentDidMount() {
    getPlaylistVideos("snippet", PLAYLIST_ID).then(response =>
      this.setState({ videos: response.data.items })
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const { videos } = this.state;
    return (
      <div
        style={{
          backgroundColor: "black",
          width: "80%",
          margin: "0 auto"
        }}
      >
        <Slider {...settings}>
          {videos.length > 0 &&
            videos.map(video => (
              <Card
                key={video.id}
                cover={video.snippet.thumbnails.medium.url}
                color="black"
                onClick={() => console.log("video clicked")}
                clickable
                zoom
                dimensions={dimensions}
                imgHeight={imgHeights}
              >
                <View justify="center" type="sashimi" width={80} round={6}>
                  <Text
                    style={{ fontWeight: "bold", color: "white" }}
                    type="span"
                  >
                    3:46
                  </Text>
                </View>
              </Card>
            ))}
        </Slider>
      </div>
    );
  }
}

export default VideoSlider;
