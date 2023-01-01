import "./styles.css";
import { Grid } from "@mui/material";
import CodeGen from "./components/CodeGen";
import CodeBlock from "./components/CodeBlock"; // Theme

// import { python } from "./samples";
import { useGenerateContext } from "./contexts/GenerateContext";

export default function App() {
  const { generated } = useGenerateContext();

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
            <CodeBlock language="language-python" code={generated} />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
}
