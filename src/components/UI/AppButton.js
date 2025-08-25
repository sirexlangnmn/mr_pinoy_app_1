import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme/theme';

export default function AppButton({ title, onPress, loading, disabled, style }) {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      disabled={isDisabled}
      style={[styles.btn, isDisabled && styles.disabled, style]}
    >
      {loading ? <ActivityIndicator /> : <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md,
    borderRadius: radius.xl,
    alignItems: 'center',
  },
  title: { color: '#0B0C0C', fontWeight: '700', fontSize: typography.body },
  disabled: { opacity: 0.6 },
});
