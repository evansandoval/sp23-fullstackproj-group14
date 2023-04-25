import { Box, Button, ChakraProvider, FormControl, Image, Input, Stack, Text, Link } from "@chakra-ui/react";
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
        <Stack align='center' spacing={4} direction='row' bg='#111111' h='60px' pl='30px'>
          <Link href='/'><Image src='/logo.png' alt='Merchant Logo' w='36px'></Image></Link>
          <Link href='/Gallery'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Gallery</Button></Link>
          <Link href='/VotingPage'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Vote</Button></Link>
          <Link href='/DesignUpload'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Upload</Button></Link>
          <Link href='/Login'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Login</Button></Link>
        </Stack>
        <Box bg='#111111' overflow='auto' h='calc(100vh)'>
            <Stack direction='column' mx='35%' my='4%'>
                <Image src='/logo.png' w='130px' />
                <Text as='b' fontSize='60px' color='white' lineHeight='1'>Login</Text>
                <Text fontSize='24px' color='white'>Please sign in to continue.</Text>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} mt='20px' mb='30px'>
                        <FormControl isRequired>
                            <Input value={stateEmail} type='stateEmail' onChange={e=>setEmail(e.target.value)} placeholder='Email' bg='#E0DDD5' color='black' border='0px' borderRadius='0px' py='20px' />
                        </FormControl>
                        <FormControl isRequired>
                            <Input value={stateUsername} type='stateUsername' onChange={e=>setUsername(e.target.value)} placeholder='Username' bg='#E0DDD5' color='black' border='0px' borderRadius='0px' py='20px' />
                        </FormControl>
                        <FormControl isRequired>
                            <Input value={statePassword} type='statePassword' onChange={e=>setPassword(e.target.value)} placeholder='Password' bg='#E0DDD5' color='black' border='0px' borderRadius='0px' py='20px' />
                        </FormControl>
                    </Stack>
                    <Stack align='center' spacing={3}>
                        <Button onClick={handleSubmit} type="submit" bgColor="#E0DDD5" size="md" border='0px' borderRadius='0px' w='150px' align='center'>
                            <Text color="#111111">LOGIN</Text>
                        </Button>
                        <Text color="white">Don't have an account? Create one <Text as='u'><Link href='/SignUp' >here</Link></Text>.</Text>
                    </Stack>
                </form>           
            </Stack>
        </Box>
    </ChakraProvider>
);
}

export default SignInForm;