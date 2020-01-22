# React-Native-Smart-Status-Bar 

|  | Status |
| - | - |
| Dependencies | [![Dependencies](https://img.shields.io/david/irohitb/react-native-smart-statusbar)](https://david-dm.org/irohitb/react-native-smart-statusbar) [![Dev dependencies](https://img.shields.io/david/dev/irohitb/react-native-smart-statusbar)](https://david-dm.org/irohitb/react-native-smart-statusbar) [![Peer dependencies](https://img.shields.io/david/peer/irohitb/react-native-smart-statusbar)](https://david-dm.org/irohitb/react-native-smart-statusbar)|
| Package | [![npm package version](https://img.shields.io/npm/v/react-native-smart-statusbar)](https://www.npmjs.com/package/react-native-smart-statusbar) [![npm downloads](https://img.shields.io/npm/dt/react-native-smart-statusbar)](https://www.npmjs.com/package/react-native-smart-statusbar)

React Native Provides with Certain Api's whose scope is limited to either iOS or Android. With React-Native-Smart-Status-Bar we try to make status bar consistent across both Android iOS. 

Basically, It handles safe area and background color across iOS and Android. 

### Note
 Developer of this repo looking for full time interesting oppertunities, [connect on linkedin](https://www.linkedin.com/in/irohitbh/)

## Installation

```
npm i react-native-device-info
npm i react-native-smart-statusbar
```

#### For IOS 

```
cd ios
pod install
``` 

for people using RN <= 0.59, please read the installation instruction from `react-native-device-info` [repo](https://github.com/react-native-community/react-native-device-info)


## Usage 

```
<SafeAreaViewDecider statusBarHiddenForNotch={true} />
```

## Props 

React-Native-Smart-Status-Bar takes three things as props 

| **Prop** | **Type** | **Default** | **Required** | **description** |
|----------|----------|-------------|--------------|--------------|
| statusBarHiddenForNotch | boolean | false | No | Determines if status bar needs to be hidden or not for notch device  |
| statusBarHiddenForNonNotch | boolean | false | No | Determines if status bar needs to be hidden or not  for non notch device| 
| backgroundColor | string | null | No |  Adds background color consistent across iOS and Android device for Status bar |


The React Native status bar also extends all the [status bar props](https://facebook.github.io/react-native/docs/statusbar)


## Examples

<strong> Note: </strong> If you don't provide background color, it will take background as white by default 

### Example 1: Hidden for Notch with Background color null

```
<SafeAreaViewDecider statusBarHiddenForNotch={true} />
```

Result: 
			
<img width="351" alt="Screenshot 2019-09-03 at 12 37 21 PM" src="https://user-images.githubusercontent.com/32276134/64151256-98056100-ce47-11e9-9aaa-6b57298a213a.png">


### Example 2: Hidden for notch with Background color provided 

```	
<SafeAreaViewDecider statusBarHiddenForNotch={true} backgroundColor="blue"/> 
```

Result: 
 
 <img width="355" alt="Screenshot 2019-09-03 at 12 39 17 PM" src="https://user-images.githubusercontent.com/32276134/64151381-e1ee4700-ce47-11e9-96e2-e34bf3da31c1.png">
 

 ### Example 3:  Hidden for non notch with Background color provided 
 
```
<SafeAreaViewDecider statusBarHiddenForNonNotch={false} backgroundColor="blue"/>
```

Result: 

<img width="337" alt="Screenshot 2019-09-03 at 12 50 39 PM" src="https://user-images.githubusercontent.com/32276134/64152071-73aa8400-ce49-11e9-97eb-761d1d0bdd35.png">



### Recent changes 

1. Check changelog.md for all the changes
