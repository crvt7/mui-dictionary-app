import {
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { DictionaryContext } from "../store/context";
import Synonyms from "./Synonyms";

const MainInfoBox = () => {
  const dictCtx = useContext(DictionaryContext);
  const wordData = dictCtx.wordData ? dictCtx.wordData.data[0] : null;

  return !wordData ? (
    <></>
  ) : (
    <>
      {wordData.meanings.map((meaning: any) => {
        return (
          <Grid item xs={4} alignItems="center">
            <Paper elevation={10} style={{ padding: 30 }}>
              <span>
                <Typography variant="h3">
                  {wordData.word} ({meaning.partOfSpeech})
                </Typography>
                <Typography variant="h4">{wordData.phonetic}</Typography>
              </span>
              <Typography
                marginTop={3}
                marginBottom={3}
                display="block"
                variant="h5"
              >
                {meaning.definitions[0].definition}
              </Typography>
              <Link href={wordData.sourceUrls[0]}>Source</Link>
            </Paper>
            <Synonyms list={meaning.synonyms} />
          </Grid>
        );
      })}
    </>
  );
};

export default MainInfoBox;
