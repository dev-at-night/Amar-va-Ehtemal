import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import ErrorMsg from "./ErrorMsg";

const RegisterInput = ({ errors, label, register }) => {
  return (
    <FormControl mb={2} isInvalid={!!errors}>
      <FormLabel fontSize="sm" fontWeight={600}>
        {label}
      </FormLabel>
      <Input
        _invalid={{ borderColor: "#b2001a", borderWidth: 2 }}
        {...register}
      />
      {errors?.type === "required" && <ErrorMsg>Field is required</ErrorMsg>}
    </FormControl>
  );
};

export default RegisterInput;
