import * as React from 'react';
import DeviceInfo from 'react-native-device-info';
import { View, StatusBar, Platform, Dimensions, } from 'react-native';
const SafeAreaDecider = ({ statusBarHiddenForNotch = false, statusBarHiddenForNonNotch = false, backgroundColor, ...rest }) => {
    const [state, setState] = React.useState({
        navbarHeight: '',
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
            }
            else if (Platform.OS === 'android') {
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
        return (React.createElement(View, { style: {
                height: navbarHeight || '',
                backgroundColor: backgroundColor,
                width: Dimensions.get('window').width,
            } },
            React.createElement(StatusBar, { ...rest, translucent: true, hidden: statusBarHiddenForNotch })));
    }
    else if (!deviceHaveNotch && Platform.OS === 'ios') {
        return (React.createElement(View, { style: {
                backgroundColor: backgroundColor,
                width: Dimensions.get('window').width,
            } },
            React.createElement(StatusBar, { ...rest, translucent: true, hidden: statusBarHiddenForNonNotch })));
    }
    else if (!deviceHaveNotch && Platform.OS === 'android') {
        return (React.createElement(StatusBar, { ...rest, backgroundColor: backgroundColor, hidden: statusBarHiddenForNonNotch }));
    }
    else {
        return null;
    }
};
export default SafeAreaDecider;
