import "./styles.css";
import { Grid } from "@mui/material";
import CodeGen from "./components/CodeGen";
import CodeBlock from "./components/CodeBlock"; // Theme

import { useEffect, useState } from 'react';

// import { python } from "./samples";
import { useGenerateContext } from "./contexts/GenerateContext";

export default function App() {
  const { generated, highlighter } = useGenerateContext();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    function checkForToken() {
      if (localStorage.getItem('access_token') === null) {
        let input = prompt("Access Token from 'https://dev-api.promptengineers.ai/docs':", "Enter Token Here") || '';
        console.log(input);
        localStorage.setItem('access_token', input)
        setHasToken(true)
      } else {
          console.log('The key exists in localStorage with the value: ', localStorage.getItem('access_token'));
          setHasToken(true)
      }
    }
    checkForToken();
  }, [])

  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <CodeGen />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          style={{
            backgroundColor: "#F8F8F8",
            height: "98vh"
          }}
        >
          {generated ? (
            <CodeBlock language={highlighter} code={generated} />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
}
