import * as React from 'react';
import DeviceInfo from 'react-native-device-info';
import {
  View,
  StatusBarProps,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';

export interface SafeAreaDeciderProps {
  statusBarHiddenForNotch: boolean;
  statusBarHiddenForNonNotch: boolean;
  backgroundColor?: string;
}

interface Istate {
  navbarHeight?: number | null; //StatusBar.currentHeight gives undefined
  deviceHaveNotch: boolean;
}
const SafeAreaDecider = ({
  statusBarHiddenForNotch = false,
  statusBarHiddenForNonNotch = false,
  backgroundColor,
  ...rest
}: SafeAreaDeciderProps & StatusBarProps) => {
  const [state, setState] = React.useState<Istate>({
    navbarHeight: null,
    deviceHaveNotch: false,
  });

  const isComponentMounted = React.useRef(true);
  React.useEffect(() => {
    async function setNotchProperties() {
      const deviceHaveNotch = await DeviceInfo.hasNotch();
      if (isComponentMounted.current) {
        const iOSHeight = deviceHaveNotch ? 44 : 20;
        setState({
          navbarHeight: iOSHeight,
          deviceHaveNotch: deviceHaveNotch,
        });
      } else if (Platform.OS === 'android') {
        setState({
          navbarHeight: StatusBar.currentHeight,
          deviceHaveNotch: deviceHaveNotch,
        });
      }
    }
    setNotchProperties();
    return () => {
      isComponentMounted.current = false;
    };
  }, []);
  const { deviceHaveNotch, navbarHeight } = state;
  if (deviceHaveNotch) {
    return (
      <View
        style={{
          height: `${navbarHeight || null}`,
          backgroundColor: backgroundColor,
          width: Dimensions.get('window').width,
        }}
      >
        <StatusBar {...rest} translucent hidden={statusBarHiddenForNotch} />
      </View>
    );
  } else if (!deviceHaveNotch && Platform.OS === 'ios') {
    return (
      <View
        style={{
          backgroundColor: backgroundColor,
          width: Dimensions.get('window').width,
        }}
      >
        <StatusBar {...rest} translucent hidden={statusBarHiddenForNonNotch} />
      </View>
    );
  } else if (!deviceHaveNotch && Platform.OS === 'android') {
    return (
      <StatusBar
        {...rest}
        backgroundColor={backgroundColor}
        hidden={statusBarHiddenForNonNotch}
      />
    );
  } else {
    return null;
  }
};

export default SafeAreaDecider;
