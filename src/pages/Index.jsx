import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/create-post");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to the Blog</Heading>
        <Text fontSize="lg">Share your thoughts and read what others have to say.</Text>
        <Box>
          <Button colorScheme="teal" onClick={handleCreatePost}>Create a New Post</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;