import "core-js/stable";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./client/App";
import 'react-toastify/dist/ReactToastify.css';

const initialData = JSON.parse(document?.getElementById('initialData')?.innerHTML || "{}"); // TODO: Inner text?

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <App initialData={initialData} />,
);
