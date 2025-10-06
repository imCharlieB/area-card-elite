import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";

const production = !process.env.ROLLUP_WATCH;
const output_file = "area-card-elite.js";

const serveOptions = {
  contentBase: ["./"],
  host: "0.0.0.0",
  port: 4000,
  allowCrossOrigin: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default {
  input: "src/main.ts",
  output: [
    {
      file: output_file,
      format: "es",
      sourcemap: true,
    },
  ],
  external: ['lit'],
  plugins: [
    json(),
    nodeResolve(),
    filesize(),
    typescript(),
    ...(production ? [terser()] : [serve(serveOptions)]),
  ],
};
