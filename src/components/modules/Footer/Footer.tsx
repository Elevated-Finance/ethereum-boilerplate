import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/ethereum-boilerplate/ethereum-boilerplate/',
  forum: 'https://forum.moralis.io/',
  moralis: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        Elevated - Investing with a purpose!
      </Text>
    </Box>
  );
};

export default Footer;
