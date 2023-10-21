"use client";
import React, { useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import Link from "next/link";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
    
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="message"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          fullWidth
          required
          sx={{ mb: 4 }}
          id="outlined-multiline-static"
          multiline
          rows={4} // You can adjust the number of rows as needed
        />

        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
