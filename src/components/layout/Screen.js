import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, StatusBar } from 'react-native';
import { colors, spacing } from '../../theme/theme';

export default function Screen({ children, padded = true }) {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.inner, padded && { padding: spacing.lg }]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  inner: { flex: 1 },
});
