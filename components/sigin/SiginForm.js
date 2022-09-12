import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../libs/mutation";
import ErrorMsg from "../common/ErrorMsg";
import RegisterInput from "../common/RegisteredInput";

const SiginForm = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    setLoading(true);

    auth({ ...values })
      .then(() => {
        router.push("/");
        toast({
          description: "You successfully enter",
          status: "success",
          duration: 2000,
          position: "top",
        });
      })
      .catch(() => {
        toast({
          description: "Your information is wrong.",
          status: "error",
          duration: 2500,
          position: "top",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RegisterInput
        errors={errors.email}
        label="email"
        register={register("email", {
          required: true,
        })}
      />
      <RegisterInput
        errors={errors.password}
        label="Password"
        type="password"
        register={register("password", {
          required: true,
        })}
      />
      <Button w="full" type="submit" colorScheme="teal" isLoading={loading}>
        Sigin
      </Button>
    </form>
  );
};

export default SiginForm;
