import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, ChakraProvider } from '@chakra-ui/react';

function NavBar() {
    <ChakraProvider>
        <Breadcrumb separator=' - '>
            <BreadcrumbItem>
                <BreadcrumbLink href='/Home'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/Gallery'>Gallery</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/DesignUpload'>Upload</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/VotingPage'>Vote</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </ChakraProvider>
}

export default NavBar;