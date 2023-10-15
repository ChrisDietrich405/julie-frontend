import { Container, Button, ButtonGroup, Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/material/TextField";

const index = () => {
  const copyrightYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Container
      sx={{
        minWidth: "100%",
        display: "grid",
        margin: 0,
        padding: 0,
        gap: 4,
        backgroundColor: "#eeeff0",
      }}
    >
      <Typography level="h2" sx={{ textAlign: "center", mt: 4 }}>
        Sign up to my newsletter for exclusive updates
      </Typography>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Box>
      <Button>Sign Up</Button>
      <Box>
        <Typography sx={{ textAlign: "center" }}>
          Sign up to my newsletter for exclusive updates
        </Typography>
      </Box>
      <Box
        sx={{
          gap: 3,
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}
        aria-label="outlined primary button group"
      >
        <Button>Shipping</Button>
        <Button>FAQs</Button>
        <Button>Testimonials</Button>
      </Box>
      <Typography sx={{ textAlign: "center" }}>
        Copyright © Dietrich {copyrightYear()}
      </Typography>
    </Container>
  );
};

export default index;
