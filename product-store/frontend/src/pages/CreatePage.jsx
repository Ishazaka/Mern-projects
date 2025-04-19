import {
  Button,
  Heading,
  Input,
  VStack,
  Box,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  function addProduct() {
    console.log(product);

    setProduct({ 
      name: "",
      price: "",
      image: "",
    })
  }
  return (
    <Container maxW={"container.sm"}>
    <VStack spacing={8}>
      <Heading as={"h1"}  textAlign={"center"} mb={8}>
          Create New product{" "}
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
            <Input
              placeholder="Name"
              name="name"
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />

            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />

            <Input
              placeholder="Image"
              name="image"
              type="text"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />

            <Button onClick={addProduct} colorScheme="blue" w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
