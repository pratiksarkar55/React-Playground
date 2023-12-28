import { useEffect, useState } from "react";
import { Grid, Container, styled } from "@mui/material";
import { createStyles } from "@mui/material/styles";
import { NoteCard } from "../components/NoteCard";

// use styled as makeStyles doesn't work in react 18.

export const stylesCreated = createStyles({
  myBorder: {
    border: "10px solid red",
  },
});

const Styles = styled("div")(stylesCreated);

// const useStyles = makeStyles(styles);

export const Notes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await fetch("http://localhost:8000/notes");
      let actualData = await data.json();
      setData(actualData);
    })();
  }, []);
  return (
    <Container>
      <Styles>
        <Grid container spacing={3}>
          {data.map((obj) => {
            return (
              <Grid key={obj.id} item xs={12} sm={6} md={3}>
                <NoteCard note={obj} />
              </Grid>
            );
          })}
        </Grid>
      </Styles>
    </Container>
  );
};
