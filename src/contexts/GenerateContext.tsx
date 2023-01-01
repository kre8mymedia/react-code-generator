import axios from "axios";
import React, { useContext, useState } from "react";
import { useAppContext } from "./AppContext";

export const GenerateContext = React.createContext({});

interface IGenerateProvider {
  children: React.ReactNode;
}

// const testPayload = {
//   language: "Python",
//   responseFormat: "Only Copy Code blocks, made sure to add comments in code, nothing else should be printed in response outside the codeblock",
//   args: "objectList, start, end",
//   fnDescription: "Takes a list of objects, queries a property of 'createdAt' on each object which is a timestamp. It returns these objects and sums up the 'balance' property on each of those returned objects.",
//   fnShouldReturn: "Total sum of the balances of queried objects.",
//   fnTestShould: "Simple function with a test case that will test the function, do not use unittest library."
// }

const url = "https://bots.skrumify.com/openai/generator/function";

export default function GenerateProvider({ children }: IGenerateProvider) {
  const { setLoading } = useAppContext();
  const [generated, setGenerated] = useState("");

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
        generateCode
      }}
    >
      {children}
    </GenerateContext.Provider>
  );
}

export function useGenerateContext(): any {
  return useContext(GenerateContext);
}
