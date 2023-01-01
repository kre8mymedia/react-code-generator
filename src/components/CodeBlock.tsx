import { useEffect } from "react";
import { useGenerateContext } from "../contexts/GenerateContext";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

// Language
import "prismjs/components/prism-go";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-java";
import "prismjs/components/prism-css";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-csharp";
// import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-python";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";


export default function CodeBlock(props: any) {
  const { generated } = useGenerateContext();

  useEffect(() => {
    Prism.highlightAll();
  }, [generated]);

  return (
    <pre>
      <code className={props.language}>{props.code}</code>
    </pre>
  );
}
