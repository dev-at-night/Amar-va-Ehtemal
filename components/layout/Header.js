import { Flex, Box } from "@chakra-ui/react";
import AppBrand from "../shared/AppBrand";

const Header = () => {
  return (
    <Flex
      w="full"
      px={4}
      py={3}
      bg="#fff"
      pos="sticky"
      top={0}
      justify="space-between"
      boxShadow="0 1px 0 rgb(0 0 0 / 14%), 0 2px 0 rgb(0 0 0 / 5%)"
    >
      <AppBrand />
    </Flex>
  );
};

export default Header;
