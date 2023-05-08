import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Hol' up!</Heading>
        <Text>
          {" "}
          {isRouteErrorResponse(error)
            ? "An error occured."
            : "Something went Wrong!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
