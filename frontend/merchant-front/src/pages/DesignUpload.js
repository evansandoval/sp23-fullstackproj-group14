import { Link, Image, Text, Stack, Button, Input, Box, Heading, ChakraProvider, Textarea} from "@chakra-ui/react";
import React, { useState } from 'react';
import axios from "axios";


function DesignUpload() {
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const onSubmit = () => {
        axios.post('', {title, body, file})
            .then((res) => {
                console.log('Submit Success');
            })
            .catch((error) => console.log(error.response.data)); 
    }

    const onSelectFile = e => {
        if(e.target.files.length !== 0){
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <ChakraProvider>
            <Stack align='center' spacing={4} direction='row' bg='#111111' h='60px' pl='30px'>
                <Link href='/'><Image src='/logo.png' alt='Merchant Logo' w='36px'></Image></Link>
                <Link href='/Gallery'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Gallery</Button></Link>
                <Link href='/VotingPage'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Vote</Button></Link>
                <Link href='/DesignUpload'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Upload</Button></Link>
                <Link href='/Login'><Button variant='ghost' color='#E0DDD5' _hover={{ opacity: '0.4' }} borderRadius='0px' size='4xl' py='10px' px='10px'>Login</Button></Link>
            </Stack>
            <Box bg='#111111' h='calc(100vh)'>
                <Stack align='center' spacing={2} pt='10px'>
                <Text as='b' align='left' color='#E0DDD5' fontSize='30px' pb='10px'>UPLOAD / DESIGN PREVIEW</Text>
                <Box _hover={{ cursor: 'pointer' }}>
                    <Box bg="#E0DDD5" boxSize='300px'>
                    <Box position="relative" height="100%" width="100%">
                        <Box position="absolute" top="0" left="0" height="100%" width="100%" display="flex" flexDirection="column">
                        <Stack height="100%" width="100%" display="flex" alignItems="center" justify="center" spacing="4">
                            <Stack p="8" textAlign="center" spacing="1">
                            <Heading fontSize="lg" color="#111111" fontWeight="bold" _hover={{ cursor: 'pointer' }}>
                                Drop images here
                            </Heading>
                            <Text fontWeight="light" color='#111111'>or click to upload</Text>
                            </Stack>
                        </Stack>
                        </Box>
                        <Input onChange={onSelectFile} type="file" height="100%" width="100%" position="absolute" top="0" left="0" opacity="0" aria-hidden="true" accept="image/*"/>
                        {<Image src={file} position="absolute" maxHeight="100%" maxWidth="100%"/> }
                    </Box>
                    </Box>
                </Box>

                <Input value={title} type="text" onChange={e => setTitle(e.target.value)} text-align='left' placeholder='Design Title' textColor='gray' bg="#E0DDD5" w="300px" variant='filled'/>
                <Textarea value={body} type="text"  onChange={e => setBody(e.target.value)} text-align='left' placeholder='Description' textColor='gray' bg="#E0DDD5" w="300px" h="150px" variant='filled'/>
                <Button onClick={onSubmit} bg='#E0DDD5' mt='15px' borderRadius='0px' textColor='black' size='md'> 
                    SUBMIT
                </Button>
            </Stack>
            </Box>
            
        </ChakraProvider>
    );
} 

export default DesignUpload;