import "./styles.css";
import {
  NativeBaseProvider,
  Box,
  Image,
  Input,
  Text,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack
} from "native-base";
import theme, { ITheme } from "./theme";

import React, {useState} from 'react';

// Making the custom theme typing available
declare module "native-base" {
  interface ICustomTheme extends ITheme {}
}

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default function App() {
  const [text, setText] = useState('');
  return (
    <NativeBaseProvider theme={theme}>
      <Box
        _light={{ bg: "coolGray.50" }}
        _dark={{ bg: "coolGray.900" }}
        minHeight="100vh"
        justifyContent="center"
        px={4}
      >
        <VStack space={5} alignItems="center">
          <Image
            source={{
              uri: "https://docs.nativebase.io/img/nativebaselogo.svg"
            }}
            alt="NativeBaseLogo"
            h="35"
            w="20"
          />
          <Heading size="lg">Tip Calculator</Heading>
          <Box><Text>Amount</Text>
          <Input
            style={{height: 40}}
            placeholder="Enter Amount"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            keyboardType="numeric"
          />
          </Box>
          <Text>
            {
              "10%    " + (parseFloat(text) * 0.10).toFixed(2).toString() + "   => " + ((parseFloat(text) + (parseFloat(text) * 0.10))).toFixed(2).toString() + "\n" +
              "15%    " + (parseFloat(text) * 0.15).toFixed(2).toString() + "   => " + ((parseFloat(text) + (parseFloat(text) * 0.15))).toFixed(2).toString() + "\n" +
              "18%    " + (parseFloat(text) * 0.18).toFixed(2).toString() + "   => " + ((parseFloat(text) + (parseFloat(text) * 0.18))).toFixed(2).toString() + "\n" + 
              "20%    " + (parseFloat(text) * 0.20).toFixed(2).toString() + "   => " + ((parseFloat(text) + (parseFloat(text) * 0.20))).toFixed(2).toString() + "\n" + 
              "22%    " + (parseFloat(text) * 0.22).toFixed(2).toString() + "   => " + ((parseFloat(text) + (parseFloat(text) * 0.22))).toFixed(2).toString() + "\n" +
              "25%    " + (parseFloat(text) * 0.25).toFixed(2).toString() + "   => " + ((parseFloat(text) + (parseFloat(text) * 0.25))).toFixed(2).toString() + "\n"                            
            }
          </Text>
          <ToggleDarkMode />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
