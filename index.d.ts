import * as React from "react";
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps
} from "react-native";

export interface OTPFieldProps extends TextInputProps {

  /**
   * Length of the OTP to be captured.
   */
  length?: number,

  /**
   * Value to displayed in the field. eg. '123'
   */
  value?: string,

  /**
   * Callback when user type in the otp field
   */
  onChange?: (value: string) => void,

  /**
   * Text field style that will be applied to individual text fields
   */
  textFieldStyle?: StyleProp<TextStyle>,

  /**
   * Style of text fields container
   */
  containerStyle?: StyleProp<ViewStyle>,

  /**
   * Error text.
   */
  error?: string,

  /**
   * Text style for error text by default its red in color.
   */
  errorStyle?: StyleProp<TextStyle>
}

/**
 * A UI component to take OTP input.
 */

declare const OTPField: React.FunctionComponent<OTPFieldProps>

export default OTPField
