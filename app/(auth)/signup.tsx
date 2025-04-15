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
import { useAuthStore } from '../services/auth.service';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const signup = useAuthStore((state) => state.signup);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await signup(email, password, name);
      if (result.success) {
        router.replace('/(app)/hello-world');
      } else {
        setError(result.error || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center style={{ flex: 1, padding: 16 }}>
      <Box style={{ width: '100%', maxWidth: 384 }}>
        <VStack style={{ gap: 16 }}>
          <Heading style={{ textAlign: 'center', marginBottom: 16 }}>
            Create Account
          </Heading>

          <FormControl isInvalid={!!error}>
            <VStack style={{ gap: 12 }}>
              <Input>
                <InputField
                  placeholder="Full Name"
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                />
              </Input>

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
                onPress={handleSignup}
                isDisabled={isLoading}
                style={{ marginTop: 16 }}
              >
                <ButtonText>
                  {isLoading ? 'Creating Account...' : 'Sign Up'}
                </ButtonText>
              </Button>

              <Text style={{ textAlign: 'center', marginTop: 8 }}>
                Already have an account?{' '}
                <Link href="/login" asChild>
                  <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>
                    Login
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