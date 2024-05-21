import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (title && content) {
      // Here you would normally handle the post submission, e.g., send it to a server
      console.log("Post submitted:", { title, content });
      toast({
        title: "Post created.",
        description: "Your post has been created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTitle("");
      setContent("");
    } else {
      toast({
        title: "Error.",
        description: "Both title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Create a New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default CreatePost;