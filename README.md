# react-native-otp-field

### React Native OTP Field 
:one: :two: :three: :four: :five:

### Installation
```
npm i react-native-otp-field
```
**RN < 0.63**
```
npm i react-native-otp-field@0.0.7
```

A tiny library that works on both android and iOS.

### Props
Props | Type | Description
------|------|------------
length | Number | OTP length
value | String | OTP string
onChange | Function | called when OTP is changed with new value as argument
textFieldStyle | Object | style for text field
containerStyle | Object | style for text field container.
error | string | error text to display.
errorStyle | Object | style for error container.

Note: It accepts all other props of RN TextField

### Usage:

```javascript
import OTPField from 'rn-otp-field';

render() {
  return {
    ...
    <OTPField
      length={5}
      value={'123'}
      error={'Please fill in complete OTP.'}
    />
    ...
  };
}
```

![Image of OTPField](https://user-images.githubusercontent.com/14236714/88966124-74ea6800-d2c9-11ea-94c8-f2ea57c3c5b0.png)