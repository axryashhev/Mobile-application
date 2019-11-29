import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {Dimensions} from 'react-native';

import DeviceInfo from 'react-native-device-info';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  rowItem1: {
    flex: 1,
    alignSelf: 'center',
  },
  rowItem2: {
    flex: 1,
  },
  child1: {
    alignSelf: 'center',
    position: 'absolute',
  },
  child2: {
    alignSelf: 'center',
    position: 'absolute',
  },
});

export class FirstScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();

    this.state = {
      Height_Layout: '',

      Width_Layout: '',

      pad: 0,

      pad2: 0,

      ps: 'center',
    };
  }

  componentDidMount() {
    this.DetectOrientation();
  }

  DetectOrientation() {
    if (this.state.Width_Layout > this.state.Height_Layout) {
      // Write Your own code here, which you want to execute on Landscape Mode.

      this.setState({
        pad: 20 + 20, // 40%
        ps: 'auto',
        pad2: 15,
      });
    } else {
      // Write Your own code here, which you want to execute on Portrait Mode.

      this.setState({
        pad: 20, // 20%
        ps: 'center',
        pad2: 15,
      });
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={styles.parentView}
        onLayout={event =>
          this.setState(
            {
              Width_Layout: event.nativeEvent.layout.width,
              Height_Layout: event.nativeEvent.layout.height,
            },
            () => this.DetectOrientation(),
          )
        }>
        <View style={styles.containerView}>
          <View style={styles.rowContainer}>
            <View style={[styles.rowItem1, {paddingTop: this.state.pad}]}>
              <Button
                style={styles.child1}
                title={'Second screen'}
                onPress={() => navigate('Second')}
              />
            </View>
            <View
              style={[
                styles.rowItem2,
                {alignSelf: this.state.ps, padding: this.state.pad2},
              ]}>
              <Button
                title={'Phone data'}
                onPress={() => this.onGetPhoneData()}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  onGetPhoneData() {
    const window = Dimensions.get('window');
    const screenWidth = window.width * window.scale;
    const screenHeight = window.height * window.scale;
    const nameDevice = DeviceInfo.getModel();

    const message =
      'Device Width: ' +
      screenWidth +
      ';\n' +
      'Device Height: ' +
      screenHeight +
      ';\n' +
      'Device name: ' +
      nameDevice +
      ';\n';

    alert(message);
  }
}
