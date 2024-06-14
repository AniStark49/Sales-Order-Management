import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../AuthContext";

const LoginForm = () => {
    const { login } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        login(data.username, data.password);
    };

    return (
        <Box width="300px" margin="0 auto" mt="100px" boxShadow="lg" p="6" rounded="md" bg="white">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.username} mb={4}>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        {...register('username', { required: 'Username is required' })}
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
                        {...register('password', { required: 'Password is required' })}
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
