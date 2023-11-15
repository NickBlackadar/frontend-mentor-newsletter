import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import successImage from "../assets/icon-success.svg";

interface Props {
  setSubmitted: (value: boolean) => void;
  email: string;
}

const Success = ({ setSubmitted, email }: Props) => {
  return (
    <>
      <Box
        bg="white"
        maxWidth="500px"
        borderRadius={10}
        padding={10}
        display="flex flex-col"
        marginTop={20}
      >
        <Image src={successImage} />
        <Heading
          as="h1"
          textColor="hsl(234, 29%, 20%)"
          fontWeight="bold"
          fontSize="3rem"
          marginY={5}
        >
          Thanks for subscribing!
        </Heading>
        <Text>
          A confirmation email has been sent to{" "}
          <Text as="span" textColor="hsl(234, 29%, 20%)" fontWeight={700}>
            {email}
          </Text>
          . Please open it and click the buton inside to confirm your
          subscription.
        </Text>
        <Button
          onClick={() => setSubmitted(false)}
          bg="hsl(234, 29%, 20%)"
          color="white"
          width="100%"
          marginTop={{ base: 250, sm: 5 }}
          fontWeight={700}
          fontSize="14px"
          paddingY="30px"
          _hover={{
            bg: "linear-gradient(to right, hsl(347, 100%, 66%), hsl(12, 100%, 62%))",
            boxShadow: "0 10px 20px hsl(347, 100%, 66%);",
          }}
        >
          Dismiss message
        </Button>
      </Box>
    </>
  );
};

export default Success;
