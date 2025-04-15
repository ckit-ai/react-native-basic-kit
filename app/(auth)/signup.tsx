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
        router.replace('/(app)');
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
    <Center flex={1} p="$4">
      <Box w="$full" maxW="$96">
        <VStack space="xl">
          <Heading size="2xl" textAlign="center" mb="$4">
            Create Account
          </Heading>

          <FormControl isInvalid={!!error}>
            <VStack space="md">
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
                <Text color="$red500" fontSize="$sm">
                  {error}
                </Text>
              ) : null}

              <Button
                onPress={handleSignup}
                isDisabled={isLoading}
                size="lg"
                mt="$4"
              >
                <ButtonText>
                  {isLoading ? 'Creating Account...' : 'Sign Up'}
                </ButtonText>
              </Button>

              <Text textAlign="center" mt="$2">
                Already have an account?{' '}
                <Link href="/login" asChild>
                  <Text color="$primary500" fontWeight="$bold">
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