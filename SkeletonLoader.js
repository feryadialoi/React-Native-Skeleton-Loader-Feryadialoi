"use strict";

import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Button,
  Animated,
  Easing,
  StyleSheet
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

class SkeletonLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorLight: "#ededed",
      colorDark: "#e0e0e0",
      loadingAnimation: new Animated.Value(0),
      positionLeft: 0,
      positionMiddle: 0,
      positionRight: 1
    };
  }

  componentDidMount() {
    if (this.props.isLoading === true) {
      this.animatedLoading();
      this.state.loadingAnimation.addListener(({ value }) =>
        this.setState({ positionMiddle: value })
      );
    }
  }

  componentDidUpdate() {
    //
  }

  componentWillUnmount() {
    //
  }

  animatedLoading() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let { colorDark, colorLight } = this.state;
        [colorDark, colorLight] = [colorLight, colorDark];
        this.setState({
          colorDark: colorDark,
          colorLight: colorLight
        });
        resolve(this.state.loadingAnimation.setValue(0));
      }, 500);
    });
    promise.then(() => {
      Animated.timing(this.state.loadingAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }).start(() => this.animatedLoading());
    });
  }

  render() {
    switch (this.props.type) {
      case "avatar":
        return (
          <View style={{ padding: 8 }}>
            <LinearGradient
              colors={[
                this.state.colorDark,
                this.state.colorLight,
                this.state.colorDark
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, this.state.positionMiddle, 1]}
              style={[
                {
                  width: this.props.size || 48,
                  height: this.props.size || 48,
                  borderRadius: 4,
                  ...this.props.style
                },
                this.props.rounded === true
                  ? { borderRadius: this.props.size / 2 || 24 }
                  : {}
              ]}
            ></LinearGradient>
          </View>
        );
        break;
      case "button":
        return (
          <View style={{ padding: 8 }}>
            <LinearGradient
              colors={[
                this.state.colorDark,
                this.state.colorLight,
                this.state.colorDark
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, this.state.positionMiddle, 1]}
              style={[
                {
                  width: 140,
                  height: 40,
                  borderRadius: 4,
                  ...this.props.style
                },
                this.props.rounded === true ? { borderRadius: 20 } : {},
                this.props.small === true ? { width: 120, height: 32 } : {}
              ]}
            ></LinearGradient>
          </View>
        );
        break;
      case "card":
        return (
          <View style={{ padding: 8 }}>
            <LinearGradient
              colors={[
                this.state.colorDark,
                this.state.colorLight,
                this.state.colorDark
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, this.state.positionMiddle, 1]}
              style={{
                width: "100%",
                height: 100,
                borderRadius: 4,
                ...this.props.style
              }}
            ></LinearGradient>
          </View>
        );
        break;

      case "checkbox":
        return (
          <View style={{ padding: 16 }}>
            <LinearGradient
              colors={[
                this.state.colorDark,
                this.state.colorLight,
                this.state.colorDark
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, this.state.positionMiddle, 1]}
              style={{
                width: 24,
                height: 24,
                borderRadius: 4,
                ...this.props.style
              }}
            ></LinearGradient>
          </View>
        );
        break;
      case "subtitle":
        return (
          <View style={{ padding: 8 }}>
            <LinearGradient
              colors={[
                this.state.colorDark,
                this.state.colorLight,
                this.state.colorDark
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, this.state.positionMiddle, 1]}
              style={[
                {
                  width: this.props.length || "100%",
                  height: 16,
                  borderRadius: 4,
                  ...this.props.style
                },
                this.props.rounded === true ? { borderRadius: 8 } : {}
              ]}
            ></LinearGradient>
          </View>
        );
        break;
      case "text":
        return (
          <View style={{ padding: 8 }}>
            <LinearGradient
              colors={[
                this.state.colorDark,
                this.state.colorLight,
                this.state.colorDark
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, this.state.positionMiddle, 1]}
              style={[
                {
                  width: this.props.length || "100%",
                  height: 20,
                  borderRadius: 4,
                  ...this.props.style
                },
                this.props.rounded === true ? { borderRadius: 10 } : {}
              ]}
            ></LinearGradient>
          </View>
        );
        break;
      case "title":
        return (
          <View style={{ padding: 8 }}>
            <LinearGradient
              colors={[
                this.state.colorDark,
                this.state.colorLight,
                this.state.colorDark
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, this.state.positionMiddle, 1]}
              style={[
                {
                  width: this.props.length || "100%",
                  height: 24,
                  borderRadius: 4,
                  ...this.props.style
                },
                this.props.rounded === true ? { borderRadius: 12 } : {}
              ]}
            ></LinearGradient>
          </View>
        );
        break;
    }
  }
}

export default SkeletonLoader;
