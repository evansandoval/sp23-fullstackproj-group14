import Design from "./Design";
import { Text, Grid, Stack } from '@chakra-ui/react';

function DesignGallery() {
    return (
        <Stack direction='column' py='20px' mb='35px'>
            <Text Text as='b' fontSize='32px' color='white' lineHeight='2'>GALLERY</Text>
            <Grid templateColumns="repeat(7, 1fr)" columnGap={10} rowGap={15}>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
                <Design/>
            </Grid>
        </Stack>
    )
}

export default DesignGallery;