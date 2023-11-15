import mobileImage from "../assets/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/illustration-sign-up-desktop.svg";
import listIcon from "../assets/icon-list.svg";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";

interface Props {
  setSubmitted: (value: boolean) => void;
  setEmail: (value: string) => void;
}

const SignUp = ({ setSubmitted, setEmail }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isEmailValid, setEmailValid] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    {
      event.preventDefault();
      if (!ref.current) return;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(ref.current.value);
      const error = document.getElementById("error") as HTMLParagraphElement;
      const input = document.getElementById("email") as HTMLInputElement;
      if (isValid) {
        setSubmitted(isValid);
        setEmail(ref.current.value);
      } else {
        error.innerText = "Valid email required";
        input.style.color = "red";
        input.style.background = "#FFCCCC";
        setEmailValid(true);
      }
    }
  };

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      borderRadius={{ base: "0px", md: 10 }}
      bg="white"
      overflow="hidden"
      maxWidth={{ base: "375px", md: "900px" }}
    >
      <GridItem
        order={{ base: 2, md: 1 }}
        display={{ md: "flex" }}
        flexDir={{ md: "column" }}
        justifyContent={{ md: "center" }}
        padding={{ base: "15px", md: "30px" }}
      >
        <Heading
          as="h2"
          textColor="hsl(234, 29%, 20%)"
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3rem" }}
          paddingY={{ base: 5 }}
        >
          Stay updated!
        </Heading>
        <Text textColor="hsl(234, 29%, 20%)" fontSize="16px" fontWeight={400}>
          Join 60,000+ product managers receiving monthly updates on:
        </Text>
        <List spacing={5} marginTop={5}>
          <ListItem
            textColor="hsl(234, 29%, 20%)"
            fontWeight={400}
            display="flex"
            alignItems="start"
          >
            <ListIcon
              as={Image}
              src={listIcon}
              alt="List Icon"
              boxSize={5}
              marginRight={3}
            />
            Product discovery and building what matters
          </ListItem>
          <ListItem
            textColor="hsl(234, 29%, 20%)"
            fontWeight={400}
            display="flex"
            alignItems="start"
          >
            <ListIcon
              as={Image}
              src={listIcon}
              alt="List Icon"
              boxSize={5}
              marginRight={3}
            />
            Measuring to ensure updates are a success
          </ListItem>
          <ListItem
            textColor="hsl(234, 29%, 20%)"
            display="flex"
            alignItems="start"
          >
            <ListIcon
              as={Image}
              src={listIcon}
              alt="List Icon"
              boxSize={5}
              marginRight={3}
            />
            And much more!
          </ListItem>
        </List>
        <Box marginTop={10}>
          <Flex>
            <Text
              textColor="hsl(234, 29%, 20%)"
              fontWeight="bold"
              fontSize={12}
            >
              Email address
            </Text>
            <Spacer />
            <Text id="error" color="red" fontWeight="bold" fontSize={12}></Text>
          </Flex>
          <form onSubmit={(event) => handleSubmit(event)}>
            <Input
              id="email"
              type="text"
              border="1px solid black"
              focusBorderColor="black"
              color="black"
              paddingY="30px"
              placeholder="email@company.com"
              _placeholder={{ opacity: 0.5, color: "gray.500" }}
              _hover={{ borderColor: "black" }}
              _focus={{ borderColor: "black" }}
              ref={ref}
              isInvalid={isEmailValid}
              autoComplete="email"
            />
            <Button
              type="submit"
              bg="hsl(234, 29%, 20%)"
              color="white"
              width="100%"
              marginY={5}
              fontWeight={700}
              fontSize="14px"
              paddingY="30px"
              _hover={{
                bg: "linear-gradient(to right, hsl(347, 100%, 66%), hsl(12, 100%, 62%))",
                boxShadow: "0 10px 20px hsl(347, 100%, 66%);",
              }}
            >
              Subscribe to monthly newsletter
            </Button>
          </form>
        </Box>
      </GridItem>
      <GridItem order={{ base: 1, md: 2 }}>
        <Image
          src={mobileImage}
          alt=""
          display={{ base: "block", md: "none" }}
        />
        <Image
          src={desktopImage}
          alt=""
          display={{ base: "none", md: "block" }}
          margin={5}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default SignUp;
