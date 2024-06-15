import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.username, data.password);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" h={"100vh"} w={'100vw'}>
      <form style={{}} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.username} mb={4}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username", { required: "Username is required" })}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} mb={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
