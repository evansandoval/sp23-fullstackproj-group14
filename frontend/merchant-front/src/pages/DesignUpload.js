import { Link, Image, Text, Stack, Button, Input, Box, Heading} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
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
        <Stack align='center' spacing={20}>
        <Text as='b' align ='left'>UPLOAD / DESIGN PREVIEW</Text>
        <Box borderColor="gray" borderStyle="dashed" borderWidth="2px" boxSize='300px'>
        <Box position="relative" height="100%" width="100%">
            <Box position="absolute" top="0" left="0" height="100%" width="100%" display="flex" flexDirection="column">
              <Stack height="100%" width="100%" display="flex" alignItems="center" justify="center" spacing="4">
                <Stack p="8" textAlign="center" spacing="1">
                  <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                    Drop images here
                  </Heading>
                  <Text fontWeight="light">or click to upload</Text>
                </Stack>
              </Stack>
            </Box>
            <Input onChange={onSelectFile} type="file" height="100%" width="100%" position="absolute" top="0" left="0" opacity="0" aria-hidden="true" accept="image/*"/>
            {<Image src={file} position="absolute" maxHeight="100%" maxWidth="100%"/> }
          </Box>
        </Box>

        <Input value={title} type="text" onChange={e => setTitle(e.target.value)} text-align='left' placeholder='Title...' width="300px" variant='filled'/>
        <Input value={body} type="text"  onChange={e => setBody(e.target.value)} text-align='left' placeholder='Descriptions...'  width="300px" height="300px" variant='filled'/>
        <Button onClick={onSubmit} colorScheme='black' size='md'> 
            SUBMIT
        </Button>
    </Stack>

    );

} 

export default DesignUpload;