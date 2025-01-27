import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/NumberPad.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS
      exports: "named"
    },
    {
      file: "dist/index.esm.js",
      format: "esm" // ES Modules
    }
  ],
  plugins: [typescript()],
  external: ["react", "react-dom"]
};
