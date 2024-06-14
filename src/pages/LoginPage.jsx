import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  if (data.username === "user" && data.password === "password") {
    navigate("/orders");
  } else {
    alert("Invalid credentials");
  }
};

return (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100%"
  >
    <Box width="300px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input {...register("username")} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input {...register("password")} />
        </FormControl>
        <Button type="submit" mt={4}>
          Login
        </Button>
      </form>
    </Box>
  </Box>
);
}

export default LoginPage;
