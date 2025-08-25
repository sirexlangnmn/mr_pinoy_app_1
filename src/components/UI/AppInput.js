import { View, TextInput, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme/theme';

export default function AppInput({
  label, placeholder, value, onChangeText, keyboardType, secureTextEntry, autoCapitalize='none', ...props
}) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.md },
  label: { color: colors.subtext, marginBottom: spacing.xs, fontSize: typography.small },
  input: {
    backgroundColor: colors.inputBg,
    color: colors.text,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: typography.body,
  },
});
