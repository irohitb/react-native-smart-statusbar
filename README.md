# React-Native-Smart-Status-Bar 


[![NPM](https://nodei.co/npm/react-native-smart-statusbar.png?compact=true)](https://nodei.co/npm/react-native-smart-statusbar/)

React Native Provides with Certain Api's whose scope is limited to either iOS or Android. With React-Native-Smart-Status-Bar we try to make status bar consistent across both Android iOS. 

Basically, It handles safe area and background color across iOS and Android. 

**Note:** Developer of this looking for full time interesting oppertunities, [connect at linkedin](https://www.linkedin.com/in/irohitbh/)

## Installation

```
npm i react-native-smart-statusbar
```

## Usage 

```
<SafeAreaViewDecider statusBarHiddenForNotch={true} />
```

## Props 

React-Native-Smart-Status-Bar takes three things as props 

| **Prop** | **Type** | **Default** | **Required** | **description** |
|----------|----------|-------------|--------------|--------------|
| statusBarHiddenForNotch | boolean | false | No | Determines if status bar needs to be hidden or not for notch device  |
| statusBarHiddenForNotch | boolean | false | No | Determines if status bar needs to be hidden or not  for non notch device| 
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

