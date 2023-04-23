import { Box, Button, ChakraProvider, FormControl, FormLabel, Heading, Input, Stack, Text, Link } from "@chakra-ui/react";
import { useState } from "react";

function SignInForm() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState('');
    
    const handleSubmit = () => {
        axios.post('http://localhost:4001/user/login', {username, password, email})
            .then((res) => {
                console.log('Submit Success');
            })
            .catch((error) => console.log(error.response.data));
    };

return (
    <ChakraProvider>
        <Box bg='black' overflow='auto' h='calc(100vh)'>
            <Stack>
                <Text as='b' fontSize='60px' color='white' lineHeight=>Login</Text>
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