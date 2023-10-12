import { Container, Button } from "@mui/material";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/material/TextField";

import React from "react";

const index = () => {
  return (
    <Container>
      <Typography level="h2" sx={{ textAlign: "center" }}>
        Sign up to my newsletter for exclusive updates
      </Typography>
      <div>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <Button>Sign Up</Button>
      </div>
      <div>
        <Typography sx={{ textAlign: "center" }}>
          Sign up to my newsletter for exclusive updates
        </Typography>
        
      </div>
    </Container>
  );
};

export default index;
