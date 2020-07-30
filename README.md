# rn-otp-field
###React Native Otp Field
A tiny library that works on both android and iOS.

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

Usage:

```javascript
import OTPField from 'rn-otp-field';

render() {
  return {
    ...
    <OTPField
      length={5}
      value={'123'}
      error={'Please fill in completed OTP.'}
    />
    ...
  };
}
```