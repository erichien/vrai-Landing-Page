import React from 'react';
import { asset, Animated, Image, Pano, Text, View } from 'react-vr';

export default class SoftwareView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 540,
      height: 200
    };
  }

  componentDidMount() {
    this.props.setWidth(this.state.width);
    this.props.setHeight(this.state.height);
  }

  render() {
    return (
      <View
        style={{
          width: this.state.width,
          height: this.state.height,
          backgroundColor: '#111',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: '100',
            opacity: 1,
            width: 500,
            textAlign: 'center'
            // lineHeight: 40
          }}
        >
          {`Github link: https://github.com/sTechLab/VRCrowdExperiments`}
        </Text>
      </View>
    );
  }
}