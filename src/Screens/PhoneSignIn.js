import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { auth } from 'firebase/auth';
import { View } from 'react-native-animatable';
function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(PhoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(PhoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={{flex:1,justifyContent:"center"}}>
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber}
      />
      </View>
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode('+1 650-555-3434')} />
    </>
  );
}

export default PhoneSignIn