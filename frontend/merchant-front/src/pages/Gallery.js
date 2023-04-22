import DesignGallery from "../components/DesignGallery";
import Design from "../components/Design";
import { Image, Text, Stack, Button } from "@chakra-ui/react";

function Gallery() {
    return (
        <Stack backgroundColor='black' align='center'>
            <Image src='/taylor-evermore.png' alt='Taylor Swift Folklore Photo' width='100%' fallbackSrc='https://via.placeholder.com/500' />
            <Text color='white' as='b'>Ongoing Contest (1/1 - 1/31)</Text>
            <Button>VOTE NOW</Button>
            <Button>UPLOAD DESIGN</Button>
            <DesignGallery />
        </Stack>
    );
}

export default Gallery;