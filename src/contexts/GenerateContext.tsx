import axios from "axios";
import React, { useContext, useState } from "react";
import { BOT_URL } from "../config/app";
import { useAppContext } from "./AppContext";

export const GenerateContext = React.createContext({});

interface IGenerateProvider {
  children: React.ReactNode;
}

const url = `${BOT_URL}/api/v1/generator/function`;

export default function GenerateProvider({ children }: IGenerateProvider) {
  const { setLoading } = useAppContext();
  const [generated, setGenerated] = useState("");
  const [highlighter, setHighlighter] = useState("");

  const title = "Open AI Code Generator";

  async function generateCode(payload: any) {
    setLoading(true);
    try {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      const res = await axios.post(url, payload);
      const code = res.data;
      // console.log(code);
      setGenerated(code.string);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      alert(e);
    }
  }

  return (
    <GenerateContext.Provider
      value={{
        title,
        generated,
        generateCode,
        highlighter,
        setHighlighter,
      }}
    >
      {children}
    </GenerateContext.Provider>
  );
}

export function useGenerateContext(): any {
  return useContext(GenerateContext);
}
