import { promises as fsp } from "fs";
import fs from "fs";
import generateComponent from "./generate-text.js";

// console.log(a)
const [, , component] = process.argv;

if (!component) {
  console.log("Error! Please provide a name for the component directory");
  process.exit(1);
}

const componentName = component[0].toUpperCase() + component.slice(1);

const dirName = `./components/${componentName}`;

const dirExists = fs.existsSync(`./${dirName}`);

const data = generateComponent(componentName);

(async () => {
  if (!dirExists) {
    await fsp.mkdir(`./${dirName}`);
  }
  await fsp.writeFile(`${dirName}/index.jsx`, data, "utf-8");
  await fsp.writeFile(`${dirName}/styles.module.scss`, "", "utf-8");
  await fsp.writeFile(`${dirName}/logic.js`, "", "utf-8");
})();
