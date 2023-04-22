import Design from "./Design";
import { Grid, GridItem } from '@chakra-ui/react';

function DesignGallery() {
    return (
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
    )
}

export default DesignGallery;