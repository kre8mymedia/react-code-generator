import {
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Button
} from "@mui/material";
import { useState } from "react";

import { useAppContext } from "../contexts/AppContext";
import { useGenerateContext } from "../contexts/GenerateContext";

export const defaultPayloadObj = {
  language: "",
  responseFormat:
    "Only Copy Code blocks, made sure to add comments in code, nothing else should be printed in response outside the codeblock",
  args: "Arguments should be based on the function description.",
  fnDescription: "",
  fnShouldReturn: "",
  fnTestShould:
    "Simple function with a test case that will test the function, do not use unittest library."
};

export default function CodeGen() {
  const [payload, setPayload] = useState(defaultPayloadObj);
  const { title, loading } = useAppContext();
  const { generateCode } = useGenerateContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="language"
          label="Languauge"
          variant="outlined"
          onChange={(e: any) =>
            setPayload({
              ...payload,
              language: e.target.value
            })
          }
          value={payload.language}
          fullWidth
        />
      </Grid>
      {/* <Grid item xs={12}>
        <TextField
          id="response-format"
          label="Response Format"
          variant="outlined"
          onChange={(e: any) =>
            setPayload({
              ...payload,
              responseFormat: e.target.value
            })
          }
          value={payload.responseFormat}
          fullWidth
        />
      </Grid> */}
      <Grid item xs={12}>
        <TextField
          id="fucntion-args"
          label="Function Arguments"
          variant="outlined"
          onChange={(e: any) =>
            setPayload({
              ...payload,
              args: e.target.value
            })
          }
          value={payload.args}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="fucntion-description"
          label="Function Description"
          variant="outlined"
          onChange={(e: any) =>
            setPayload({
              ...payload,
              fnDescription: e.target.value
            })
          }
          value={payload.fnDescription}
          fullWidth
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="fucntion-should-return"
          label="Function Should Return"
          variant="outlined"
          onChange={(e: any) =>
            setPayload({
              ...payload,
              fnShouldReturn: e.target.value
            })
          }
          value={payload.fnShouldReturn}
          fullWidth
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="fucntion-test-should"
          label="Function Test Should"
          variant="outlined"
          onChange={(e: any) =>
            setPayload({
              ...payload,
              fnTestShould: e.target.value
            })
          }
          value={payload.fnTestShould}
          fullWidth
          multiline
          rows={4}
        />
      </Grid>
      <Grid item>
        {loading ? (
          <Button
            size="small"
            disabled
            variant="contained"
            className="right-align"
            fullWidth
          >
            <CircularProgress size="1.2rem" color="inherit" />
          </Button>
        ) : (
          <Button
            size="small"
            variant="contained"
            className="right-align"
            onClick={() => generateCode(payload)}
            fullWidth
          >
            Submit
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
