import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import { Button, Card, Icon, Text, View } from "wasabi-kit";

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

class VideoSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div
        style={{
          backgroundColor: "black",
          width: "80%",
          margin: "0 auto"
        }}
      >
        <Slider {...settings}>
          <Card
            cover="https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg"
            color="black"
            onClick={() => console.log("video clicked")}
            clickable
            zoom
            dimensions={dimensions}
            imgHeight={imgHeights}
          >
            <View
              justify="center"
              type="sashimi"
              width={80}
              round={6}
            >
              <Text style={{ fontWeight: "bold", color: "white" }} type="span">
                3:46
              </Text>
            </View>
          </Card>
          <Card
            cover="https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg"
            color="black"
            onClick={() => console.log("video clicked")}
            clickable
            zoom
            dimensions={dimensions}
            imgHeight={imgHeights}
          >
            <View
              justify="center"
              type="sashimi"
              width={80}
              round={6}
            >
              <Text style={{ fontWeight: "bold", color: "white" }} type="span">
                3:46
              </Text>
            </View>
          </Card>
          <Card
            cover="https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg"
            color="black"
            onClick={() => console.log("video clicked")}
            clickable
            zoom
            dimensions={dimensions}
            imgHeight={imgHeights}
          >
            <View
              justify="center"
              type="sashimi"
              width={80}
              round={6}
            >
              <Text style={{ fontWeight: "bold", color: "white" }} type="span">
                3:46
              </Text>
            </View>
          </Card>
          <Card
            cover="https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg"
            color="black"
            onClick={() => console.log("video clicked")}
            clickable
            zoom
            dimensions={dimensions}
            imgHeight={imgHeights}
          >
            <View
              justify="center"
              type="sashimi"
              width={80}
              round={6}
            >
              <Text style={{ fontWeight: "bold", color: "white" }} type="span">
                3:46
              </Text>
            </View>
          </Card>
          <Card
            cover="https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg"
            color="black"
            onClick={() => console.log("video clicked")}
            clickable
            zoom
            dimensions={dimensions}
            imgHeight={imgHeights}
          >
            <View
              justify="center"
              type="sashimi"
              width={80}
              round={6}
            >
              <Text style={{ fontWeight: "bold", color: "white" }} type="span">
                3:46
              </Text>
            </View>
          </Card>
          <Card
            cover="https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg"
            color="black"
            onClick={() => console.log("video clicked")}
            clickable
            zoom
            dimensions={dimensions}
            imgHeight={imgHeights}
          >
            <View
              justify="center"
              type="sashimi"
              width={80}
              round={6}
            >
              <Text style={{ fontWeight: "bold", color: "white" }} type="span">
                3:46
              </Text>
            </View>
          </Card>
        </Slider>
      </div>
    );
  }
}

export default VideoSlider;
