import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Screen from '../../components/layout/Screen';
import AppText from '../../components/UI/AppText';
import AppInput from '../../components/UI/AppInput';
import AppButton from '../../components/UI/AppButton';
import { colors, spacing, typography } from '../../theme/theme';

export default function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const validate = () => {
    if (!email || !mobile || !password) return 'All fields are required.';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email.';
    if (!/^\d{10,13}$/.test(mobile)) return 'Mobile must be 10–13 digits.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  const onRegister = async () => {
    const v = validate();
    if (v) { setErr(v); return; }
    try {
      setLoading(true);
      // TODO: connect to Firebase Auth here (createUserWithEmailAndPassword)
      // and store mobile in Firestore. For now, simulate success:
      setTimeout(() => {
        setLoading(false);
        navigation.replace('Login'); // after register, go to login
      }, 800);
    } catch (e) {
      setLoading(false);
      setErr('Registration failed. Please try again.');
    }
  };

  return (
    <Screen>
      <View style={styles.header}>
        <AppText style={styles.title}>Create your account</AppText>
        <AppText style={styles.subtitle}>Join the community and start exploring services.</AppText>
      </View>

      <View style={styles.form}>
        <AppInput
          label="Email address"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <AppInput
          label="Mobile number"
          placeholder="09XXXXXXXXX"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />
        <AppInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {err ? <AppText style={styles.error}>{err}</AppText> : null}

        <AppButton title="Create account" onPress={onRegister} loading={loading} />

        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <AppText style={styles.link}>Already have an account? Sign in</AppText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { marginTop: spacing.lg, marginBottom: spacing.lg },
  title: { fontSize: 28, fontWeight: '800', color: colors.text, marginBottom: spacing.sm },
  subtitle: { color: colors.subtext, fontSize: typography.body },
  form: { gap: spacing.sm },
  error: { color: '#FF6B6B', marginBottom: spacing.sm },
  link: { textAlign: 'center', marginTop: spacing.md, color: colors.accent, fontWeight: '700' },
});
