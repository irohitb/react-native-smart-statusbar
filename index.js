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

	componentDidMount = async () => {
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
		const {navbarHeight} = this.state
		const {
			backgroundColor,
			statusBarHiddenForNotch,
			statusBarHiddenForNonNotch,
			...rest
		} = this.props
		if (DeviceInfo.hasNotch()) {
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
		} else if (!DeviceInfo.hasNotch()) {
			return (
				<View
					style={{
						backgroundColor: backgroundColor,
						width: Dimensions.get('window').width,
					}}
				>
					<StatusBar {...rest} translucent hidden={this.props.statusBarHiddenForNonNotch} />
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
	statusBarHiddenForNonNotch: false
}

export default SafeAreaDecider
