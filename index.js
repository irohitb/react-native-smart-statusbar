import React, {PureComponent} from 'react'
import DeviceInfo from 'react-native-device-info'
import {View, Text, StyleSheet, StatusBar, Platform, NativeModules, Dimensions} from 'react-native'
import PropTypes from 'prop-types'

class SafeAreaDecider extends PureComponent {
	constructor(props) {
		super(props)
	}

	state = {
		navbarHeight: null,
		deviceHaveNotch: false,
	}

	componentDidMount = async () => {
		const deviceHaveNotch = await DeviceInfo.hasNotch()
		if (Platform.OS === 'ios') {
			const iosHeight = deviceHaveNotch ? 44: 20
			this.setState({navbarHeight: iosHeight, deviceHaveNotch: deviceHaveNotch})
		} else if (Platform.OS === 'android') {
			console.log(`Platform is Android:`, StatusBar.currentHeight)
			this.setState({navbarHeight: StatusBar.currentHeight, deviceHaveNotch: deviceHaveNotch})
		}
	}

	render() {
		const {navbarHeight, deviceHaveNotch} = this.state
		const {
			backgroundColor,
			statusBarHiddenForNotch,
			statusBarHiddenForNonNotch,
			...rest
		} = this.props
		console.log(navbarHeight)
		if (deviceHaveNotch) {
			return (
				<View
					style={{
						height: navbarHeight,
						backgroundColor: backgroundColor,
						width: Dimensions.get('window').width
					}}
				>
					<StatusBar {...rest} translucent hidden={this.props.statusBarHiddenForNotch} />
				</View>
			)
		} else if (!deviceHaveNotch && Platform.OS === 'ios') {
			return (
				<View
					style={{
						backgroundColor: backgroundColor,
						width: Dimensions.get('window').width
					}}
				>
					<StatusBar {...rest} translucent hidden={this.props.statusBarHiddenForNonNotch} />
				</View>
			)
		} else if (!deviceHaveNotch && Platform.OS === 'android') {
			return (
			<StatusBar {...rest} backgroundColor={backgroundColor} hidden={this.props.statusBarHiddenForNonNotch} />
			)
		}
	}
}

SafeAreaDecider.propTypes = {
	statusBarHiddenForNotch: PropTypes.bool,
	statusBarHiddenForNonNotch: PropTypes.bool,
	backgroundColor: PropTypes.string
}

SafeAreaDecider.defaultProps = {
	statusBarHiddenForNotch: false,
	statusBarHiddenForNonNotch: false,
	
}

export default SafeAreaDecider

// Points to note that ios does not have background color (https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native)