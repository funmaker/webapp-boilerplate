import * as fs from 'fs';
import { ClientConfig } from 'pg';

interface Configs {
  pocer: {
    port: number;
  };
  db: ClientConfig;
  eth: {
    baseURI: string;
    salt: string;
    node: string;
    networkId: number | string;
    account?: string | null;
    password?: string | null;
  };
}

let configs: Configs;
try {
  // noinspection UnnecessaryLocalVariableJS
  const configsFile: typeof import("../../configs.json") = JSON.parse(fs.readFileSync("./configs.json").toString("utf-8"));
  
  configs = configsFile;
} catch(e) {
  configs = {
    pocer: {
      port: 3939,
    },
    db: {
      user: "nftassemblypoc",
      host: "localhost",
      database: "nftassemblypoc",
      password: "nftassemblypoc",
      port: 5432,
    },
    eth: {
      baseURI: "http://localhost:$PORT/token/",
      salt: "70A42C5C3703AB5615BE17074C50F704E9",
      node: "ws://localhost:7545",
      networkId: "*",
      account: null,
      password: null,
    },
  };
}

export default configs;
