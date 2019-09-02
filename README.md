# React-Native-Smart-Status-Bar 

[![NPM](https://nodei.co/npm/react-native-smart-statusbar.png?compact=true)](https://nodei.co/npm/react-native-smart-statusbar/)

React Native Provides with Certain Api's whose scope is limited to either iOS or Android. With React-Native-Smart-Status-Bar we try to make status bar consistent across both Android iOS. 

Basically, It handles safe area and background color across iOS and Android. 

## Installation

```
npm i react-native-smart-statusbar
```

## Usage 

```
	<SafeAreaViewDecider statusBarHiddenForNotch={true} />
```

Props 

React-Native-Smart-Status-Bar takes three things as props 

| **Prop** | **Type** | **Default** | **Required** | **description** |
|----------|----------|-------------|--------------|--------------|
| statusBarHiddenForNotch | boolean | false | No | Determines if status bar needs to be hidden or not for notch device  |
| statusBarHiddenForNotch | boolean | false | No | Determines if status bar needs to be hidden or not  for non notch device| 
| backgroundColor | string | null | No |  Adds background color consistent across iOS and Android device for Status bar |
