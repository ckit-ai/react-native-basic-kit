import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  Heading,
  Input,
  InputField,
  VStack,
  Text,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
  InputSlot,
} from '@gluestack-ui/themed';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Accept any credentials
      login();
      router.replace('/(app)/hello-world');
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center style={{ flex: 1, padding: 16 }}>
      <Box style={{ width: '100%', maxWidth: 384 }}>
        <VStack style={{ gap: 16 }}>
          <Heading style={{ textAlign: 'center', marginBottom: 16 }}>
            Welcome Back
          </Heading>

          <FormControl isInvalid={!!error}>
            <VStack style={{ gap: 12 }}>
              <Input>
                <InputField
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </Input>

              <Input>
                <InputField
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <InputSlot onPress={() => setShowPassword(!showPassword)}>
                  <InputIcon>
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </InputIcon>
                </InputSlot>
              </Input>

              {error ? (
                <Text style={{ color: 'red', fontSize: 14 }}>
                  {error}
                </Text>
              ) : null}

              <Button
                onPress={handleLogin}
                isDisabled={isLoading}
                style={{ marginTop: 16 }}
              >
                <ButtonText>
                  {isLoading ? 'Logging in...' : 'Login'}
                </ButtonText>
              </Button>

              <Text style={{ textAlign: 'center', marginTop: 8 }}>
                Don't have an account?{' '}
                <Link href="/signup" asChild>
                  <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>
                    Sign up
                  </Text>
                </Link>
              </Text>
            </VStack>
          </FormControl>
        </VStack>
      </Box>
    </Center>
  );
} 