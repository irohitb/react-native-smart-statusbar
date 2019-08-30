import React, {PureComponent} from 'react'
import DeviceInfo from 'react-native-device-info'
import {View, Text, StyleSheet, StatusBar, Platform, NativeModules, Dimensions} from 'react-native'
import PropTypes from 'prop-types'

class SafeAreaDecider extends PureComponent {
	constructor(props) {
		super(props)
	}

	state = {
		navbarHeight: null
	}

	componentWillMount () {
		console.log(this.props)
	}

	componentDidMount = async () => {
		//Setting up Status Bar height
		let StatusBarHeight = null
		const {StatusBarManager} = NativeModules
		if (Platform.OS === 'ios') {
			StatusBarHeight = await StatusBarManager.getHeight(statusBarHeight => {
				this.setState({navbarHeight: statusBarHeight.height})
			})
		} else if (Platform.OS === 'android') {
			this.setState({navbarHeight: StatusBar.currentHeight})
		}
	}

	render() {
		//Getting Navbar height
		const {navbarHeight} = this.state //SafeViewDecider //SafeViewDecider
		//Checking if the device have notch
		const {backgroundColor, statusBarHiddenForNotch, statusBarHiddenForNonNotch, ...rest} = this.props
		console.log(navbarHeight, backgroundColor, statusBarHiddenForNotch, statusBarHiddenForNonNotch)
		if (DeviceInfo.hasNotch()) {
			return (
				<View
					style={{
						height: navbarHeight,
						backgroundColor: backgroundColor,
						width: Dimensions.get('window').width
					}}
				>
					<StatusBar
						{...rest}
						translucent
						hidden={this.props.statusBarHiddenForNotch}
					/>
				</View>
			)
		} else if (!DeviceInfo.hasNotch()) {
			// Device does not have notch
			return (
				<View
					style={{
						backgroundColor: backgroundColor,
						width: Dimensions.get('window').width
					}}
				>
					<StatusBar translucent hidden={this.props.statusBarHiddenForNonNotch} {...rest} />
				</View>
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
	statusBarHiddenForNonNotch: true
}

export default SafeAreaDecider

// Points to note that ios does not have background color (https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native)
