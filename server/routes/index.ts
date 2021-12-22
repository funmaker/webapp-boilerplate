import os from 'os';
import PromiseRouter from "express-promise-router";
import { IndexResponse } from "./apiTypes";

export const router = PromiseRouter();

router.get('/', (req, res) => {
  const initialData = {
    kek: `Welcome to NFT Registry on ${os.hostname()}!`,
  };
  
  res.react<IndexResponse>(initialData);
});

