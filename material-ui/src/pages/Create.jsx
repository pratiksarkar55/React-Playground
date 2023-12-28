import { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

// @mui/styles is no longer supported in React 18.Need to check.

const NoteText = styled("div")({
  marginTop: 20,
  marginBottom: 20,
  display: "block",
  fontFamily: "Quicksand",
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: 1.6,
  color: "rgba(0, 0, 0, 0.6)",
});

export const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then((obj) => {
        navigate("/", { replace: true });
        setTitleError(false);
        setDetailsError(false);
      });
    }
  };
  return (
    <Container>
      <NoteText>Create a New Note</NoteText>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          sx={{
            marginBottom: "20px",
          }}
          label="Note Tilte"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        ></TextField>
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          sx={{
            marginBottom: "20px",
          }}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        ></TextField>
        <FormControl
          sx={{
            display: "block",
            marginBottom: "20px",
          }}
        >
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            color="secondary"
          >
            <FormControlLabel
              control={<Radio />}
              label="Money"
              value={"money"}
            />
            <FormControlLabel
              control={<Radio />}
              label="Todos"
              value={"todos"}
            />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value={"reminders"}
            />
            <FormControlLabel control={<Radio />} label="Work" value={"work"} />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          disableElevation
          onClick={() => {}}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
