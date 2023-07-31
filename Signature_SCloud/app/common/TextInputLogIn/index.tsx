import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StyleProp,
  TextStyle,
  NativeSyntheticEvent,
  TouchableOpacity,
  TextInputFocusEventData,
} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import {HEIGHT, WIDTH, getFont} from '@app/config/functions';
import {spacing} from '@app/theme/spacing';
import R from '@app/assets/index';
import {IColorsTheme} from '@app/theme/lightmode';
import {Icon} from '@app/components/icon/icon';
import {IconTypes} from '@app/components/icon/icons';
type InputProps = {
  secureTextEntry?: boolean;
  placeholder?: string;
  iconRight?: IconTypes;
  iconLeft?: IconTypes;
  value?: string;
  onChangeText?: (txt?: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onPressRight?: () => void;
};
const TextInputLogin = (props: InputProps) => {
  const {
    placeholder,
    secureTextEntry,
    iconRight,
    iconLeft,
    value,
    onBlur,
    onChangeText,
    onFocus,
    onPressRight,
    ...inputProps
  } = props;
  const {colors}: {colors: IColorsTheme} = useTheme();
  return (
    <View
      style={{
        marginHorizontal: WIDTH(spacing.large),
        paddingVertical: HEIGHT(spacing.tiny),
        borderRadius: spacing.small,
        borderWidth: 1,
        flexDirection: 'row',
        paddingLeft: WIDTH(spacing.tiny),
        paddingRight: WIDTH(spacing.large),
        marginTop: HEIGHT(spacing.medium),
        backgroundColor: R.colors.surface_container,
        alignItems: 'center',
      }}>
      {iconLeft && <Icon icon={iconLeft} size={HEIGHT(40)} />}
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...inputProps}
        style={{
          fontFamily: R.fonts.Manrope,
          fontSize: getFont(16),
          lineHeight: HEIGHT(12),
          color: colors.textTitle,
          paddingHorizontal: WIDTH(spacing.small),
          borderLeftWidth: 1,
          marginLeft: WIDTH(spacing.extraSmall),
          borderColor: R.colors.outline_variant,
          width: '80%',
        }}
      />
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <Icon icon={iconRight} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputLogin;

const styles = StyleSheet.create({});
