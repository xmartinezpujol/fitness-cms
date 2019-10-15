import React from "react";
import styled from "styled-components";

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleSelect(eventId) {
    this.setState(() => ({
      selected: eventId
    }));
  }

  handleFavorite(e) {
    e.stopPropagation();
    alert("Favorite me in API");
  }

  render() {
    const { videos } = this.props;
    return (
      <React.Fragment>
        {videos.map(video => (
          <EventListCardWrapper key={video.id}>
            <EventListCard
              onClick={() => this.handleSelect(video.id)}
              url={video.snippet.thumbnails.medium.url}
              dimensions={this.props.dimensions}
            >
              <Overlay />
            </EventListCard>
            <EventInfo>
              <EventListTitle dimensions={this.props.dimensions}>
                {video.snippet.title}
              </EventListTitle>
            </EventInfo>
          </EventListCardWrapper>
        ))}
      </React.Fragment>
    );
  }
}

const EventInfo = styled.div({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: 10
});

const EventListTitle = styled.span(
  {
    color: "#36424a",
    fontSize: 18,
    lineHeight: 2,
    fontWeight: 900,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  props => ({
    maxWidth: `calc(${props.dimensions.lg.w}px - 28px)`,
    "@media(max-width: 1200px)": {
      maxWidth: `calc(${props.dimensions.md.w}px - 28px)`
    },
    "@media(max-width: 992px)": {
      maxWidth: `calc(${props.dimensions.sm.w}px - 28px)`
    },
    "@media(max-width: 767px)": {
      maxWidth: `calc(${props.dimensions.xs.w}px - 28px)`
    }
  })
);

const EventListVenueTitle = styled.span(
  {
    color: "#6e7a83",
    fontSize: 16,
    lineHeight: 1.2,
    marginBottom: 4,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  props => ({
    maxWidth: `calc(${props.dimensions.lg.w}px - 28px)`,
    "@media(max-width: 1200px)": {
      maxWidth: `calc(${props.dimensions.md.w}px - 28px)`
    },
    "@media(max-width: 992px)": {
      maxWidth: `calc(${props.dimensions.sm.w}px - 28px)`
    },
    "@media(max-width: 767px)": {
      maxWidth: `calc(${props.dimensions.xs.w}px - 28px)`
    }
  })
);

const EventListCardWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  margin: 3,
  borderRadius: 5,
  transition: "0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)",
  ":hover": {
    cursor: "pointer"
  }
});

const EventListCard = styled.div(
  {
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    borderRadius: 5,
    border: 0,
    transform: "translateY(0px)",
    transition: "0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)",
    ":hover": {
      opacity: 0.8
    }
  },
  props => ({
    height: props.dimensions.lg.h * 0.6,
    minWidth: props.dimensions.lg.w,
    maxWidth: props.dimensions.lg.w,
    backgroundImage: `url(${props.url})`,
    "@media(max-width: 1200px)": {
      height: props.dimensions.md.h * 0.6,
      minWidth: props.dimensions.md.w,
      maxWidth: props.dimensions.md.w
    },
    "@media(max-width: 992px)": {
      height: props.dimensions.sm.h * 0.6,
      minWidth: props.dimensions.sm.w,
      maxWidth: props.dimensions.sm.w
    },
    "@media(max-width: 767px)": {
      height: props.dimensions.xs.h * 0.6,
      minWidth: props.dimensions.xs.w,
      maxWidth: props.dimensions.xs.w
    }
  })
);

const Overlay = styled.div({
  position: "absolute",
  transition: "all 0.3s ease",
  height: "100%",
  width: "100%",
  zIndex: 1,
  backgroundImage:
    "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,.85) 100%)"
});

export default VideoCard;
