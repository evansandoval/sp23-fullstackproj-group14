import { Box, Button, ChakraProvider, FormControl, Image, Link, Input, Stack, Text } from "@chakra-ui/react";
import React, {useState} from "react"; 
import axios from "axios";

function CreateAccount() {
  const [stateUsername, setUsername] = useState(''); 
  const [statePassword, setPassword] = useState(''); 
  const [stateEmail, setEmail] = useState('');


  const handleSubmit = () => {
    let postObj = {username: stateUsername, password: statePassword, email: stateEmail}
    console.log(postObj)
    axios.post('http://localhost:4001/user/signup', postObj)
      .then((res) => {
        console.log('Submit Success');
      })
      .catch((error) => console.log(error.response));
  }

    return (
        <ChakraProvider>
            <Box bg='#111111' overflow='auto' h='calc(100vh)'>
                <Stack align='center' spacing={4} direction='row' bg='#111111' h='60px' pl='30px'>
                    <Link href='/'><Image src='/logo.png' alt='Merchant Logo' w='36px'></Image></Link>
                    <Link href='/Gallery'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Gallery</Button></Link>
                    <Link href='/VotingPage'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Vote</Button></Link>
                    <Link href='/DesignUpload'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Upload</Button></Link>
                    <Link href='/Login'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Login</Button></Link>
                </Stack>
                <Stack direction='column' mx='35%' my='4%'>
                    <Image src='/logo.png' w='130px' />
                    <Text as='b' fontSize='60px' color='white' lineHeight='1'>Sign Up</Text>
                    <Text fontSize='24px' color='white'>Create an account.</Text>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4} mt='20px' mb='30px'>
                            <FormControl isRequired>
                                <Input type='email' onChange={e=>setEmail(e.target.value)} placeholder='Email' bg='#E0DDD5' color='black' border='0px' borderRadius='0px' py='20px' />
                            </FormControl>
                            <FormControl isRequired>
                                <Input type='username' onChange={e=>setUsername(e.target.value)} placeholder='Username' bg='#E0DDD5' color='black' border='0px' borderRadius='0px' py='20px' />
                            </FormControl>
                            <FormControl isRequired>
                                <Input type='password' onChange={e=>setPassword(e.target.value)} placeholder='Password' bg='#E0DDD5' color='black' border='0px' borderRadius='0px' py='20px' />
                            </FormControl>
                        </Stack>
                        <Box align='center'>
                            <Button onClick={handleSubmit} type="submit" bgColor="#E0DDD5" size="md" border='0px' borderRadius='0px' w='150px' align='center'>
                                <Text color="black">SIGN UP</Text>
                            </Button>
                        </Box>
                    </form>           
                </Stack>
            </Box>
        </ChakraProvider>
    );
}

export default CreateAccount;
