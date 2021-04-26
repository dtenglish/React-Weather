import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
  return (
    <Box
      mt="6rem"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      textAlign="center"
    >
      <Typography variant="body2" color="textSecondary">
        By <Link href="https://github.com/dtenglish" color="primary">Daniel Taylor English</Link>
        <br />
        &copy;2021
      </Typography>
    </Box>
  );
}

export default Footer;
