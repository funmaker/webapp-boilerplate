import os from 'os';
import express from "express";
import packageJSON from "../../package.json";
import { IndexPageResponse } from "../../types/api";

export const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=0, no-store');
  
  next();
});

// Pages go here

router.get<never, IndexPageResponse>('/', async (req, res) => {
  res.react({
    kek: `Welcome to Boilerplate ${packageJSON.version} on ${os.hostname()}!`,
  });
});
