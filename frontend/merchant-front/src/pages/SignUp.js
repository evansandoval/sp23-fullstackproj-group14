import {
    Box,
    Button,
    ChakraProvider,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack, 
    Text
  } from "@chakra-ui/react";
  import React, {useState} from "react"; 
  import axios from "axios";
  
  function CreateAccount() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState('');
  
  
    const handleSubmit = () => {
      axios.post('http://localhost:4001/user/signup', {username, password, email})
        .then((res) => {
          console.log('Submit Success');
        })
        .catch((error) => console.log(error.response.data));
    }
  
    return (
      <ChakraProvider>
        <Stack spacing={4} backgroundColor="black">
          <Box p={10}>
            <Box textAlign="center">
              <Heading color="white">Create Account</Heading>
            </Box>
              <Box my={8} textAlign="left">
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <FormControl isRequired>
                        <FormLabel color="white">Email</FormLabel>
                        <Input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" color="white" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="white">Username</FormLabel>
                      <Input value={username} onChange={e=>setUsername(e.target.value)}color="white" placeholder="Enter your username" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="white">Password</FormLabel>
                      <Input value={password} onChange={e=>setPassword(e.target.value)}color="white" type="password" placeholder="Enter your password" />
                    </FormControl>
                    <Button onClick={handleSubmit} type="submit" bgColor="white" size="lg">
                      <Text color="black">Submit</Text>
                    </Button>
                  </Stack>
                </form>
                
              </Box>
          </Box>
        </Stack>
      </ChakraProvider>
    );
  }
  
  export default CreateAccount;
  