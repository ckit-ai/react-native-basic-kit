import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { InputIcon } from "@/components/ui/input";
import { Icon, EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { InputSlot } from "@/components/ui/input";
import { useAuth } from '../context/AuthContext';
import { Image } from 'react-native';

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSignup = async () => {
    if (!fullName || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate successful signup and automatic login
      login();
      router.replace('/(app)/hello-world');
    } catch (err) {
      setError('An error occurred during signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center style={{ flex: 1, padding: 16 }}>
      <Box style={{ width: '100%', maxWidth: 384 }}>
        <VStack style={{ gap: 16, alignItems: 'center' }}>
          <Image 
            source={require('@/assets/logo-t.webp')} 
            style={{ width: 100, height: 100, marginBottom: 16 }} 
            resizeMode="contain"
          />
          
          <Heading style={{ textAlign: 'center', marginBottom: 16 }}>
            Create Account
          </Heading>

          <FormControl isInvalid={!!error}>
            <VStack style={{ gap: 12 }}>
              <Input>
                <InputField
                  placeholder="Full Name"
                  value={fullName}
                  onChangeText={setFullName}
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
                    {showPassword ? 
                      <Icon as={EyeOffIcon} size="md" /> : 
                      <Icon as={EyeIcon} size="md" />
                    }
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