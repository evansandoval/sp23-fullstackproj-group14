import { Box, Button, ChakraProvider, FormControl, FormLabel, Heading, Input, Stack, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"

function SignInForm() {
    const [stateUsername, setUsername] = useState(''); 
    const [statePassword, setPassword] = useState(''); 
    const [stateEmail, setEmail] = useState('');
    
    const handleSubmit = () => {
        let postObj = {username: stateUsername, password: statePassword, email: stateEmail}
        console.log(postObj)
        axios.post('http://localhost:4001/user/login', postObj)
        .then((res) => {
          console.log('Submit Success');
        })
        .catch((error) => console.log(error.response))
    };

return (
    <ChakraProvider>
        <Box bg='black' overflow='auto' h='calc(100vh)'>
            <Stack>
                <Text as='b' fontSize='60px' color='white' lineHeight="1.5">Login</Text>
                <Text fontSize='24px' color='white'>Please sign in to continue.</Text>
            </Stack>
            
            <Stack spacing={4} backgroundColor="black">
            <Box textAlign="center">
                <Heading color="white">Sign in to your account</Heading>
            </Box>
                <Box my={8} textAlign="left">
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <FormControl isRequired>
                            <FormLabel color="white">Email</FormLabel>
                            <Input value={stateEmail} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" color="white" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="white">Username</FormLabel>
                            <Input value={stateUsername} onChange={e=>setUsername(e.target.value)}color="white" placeholder="Enter your username" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="white">Password</FormLabel>
                            <Input value={statePassword} onChange={e=>setPassword(e.target.value)}color="white" type="password" placeholder="Enter your password" />
                        </FormControl>
                        <Button onClick={handleSubmit}type="submit" bgColor="white" size="lg">
                            <Text color="black">Sign in</Text>
                        </Button>
                        <Link href='/SignUp'>
                            <Button bgColor="white" size="lg">
                                <Text color="black">Create Account</Text>
                            </Button>
                        </Link>
                    </Stack>
                </form>           
                </Box>
        </Stack>
        </Box>
    </ChakraProvider>
);
}

export default SignInForm;