import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Pressable, Platform, Text } from 'react-native';

/**
 * A UI component to take OTP input 
 * @prop {number} length OTP length
 * @prop {string} value OTP string
 * @prop {function} onChange when OTP is changed
 * @prop {Object} textFieldStyle style for text field
 * @prop {Object} containerStyle style for text field container.
 * @prop {string} error error text to display.
 * @prop {Object} errorStyle style for error container.
 * other text field props
 */
const OTPField = ({ length, value, onChange, textFieldStyle, containerStyle, error, errorStyle, ...props }) => {
  const refs = [];
  for (let i = 0; i < length; i++) {
    refs.push(useRef(null));
  }

  const [otp, setOtp] = useState(value);

  useEffect(() => {
    if (value !== otp) {
      setOtp(value);
    }
  }, [otp, value]);

  const onKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace') {
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    } else {
      if (index < length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  const onChangeText = (value, index) => {
    const left = otp.substr(0, index);
    const right = otp.substr(index + 1);
    const newOtp = left + value + right;
    if (Platform.OS === 'android' && newOtp.length > otp.length) {
      onKeyPress({ nativeEvent: { key: value } }, index);
    }
    setOtp(newOtp);
    onChange(newOtp);
  };

  const onFieldPress = () => {
    if (otp.length === length) {
      refs[otp.length - 1].current.focus();
    } else {
      refs[otp.length].current.focus();
    }
  };

  return (
    <View>
      <Pressable onPress={onFieldPress}>
        <View style={[styles.row, containerStyle]}>
          {
            refs.map((ref, index) => {
              return (
                <View pointerEvents={'none'} key={'' + index}>
                  <TextInput
                    ref={ref}
                    style={[styles.textInput, textFieldStyle]}
                    maxLength={1}
                    value={otp[index]}
                    onKeyPress={(event) => onKeyPress(event, index)}
                    onChangeText={(value) => onChangeText(value, index)}
                    onSubmitEditing={() => { }}
                    keyboardType={'number-pad'}
                    {...props}
                  />
                </View>
              );
            })
          }

        </View>
      </Pressable>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: 'rgb(216,216,216)',
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  error: {
    color: 'rgb(255,0,0)',
  },
});

export default OTPField;
