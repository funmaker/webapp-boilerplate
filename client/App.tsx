import React, { useEffect } from 'react';
import { Router, Route, Switch, useLocation } from "wouter";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";
import { PageDataProvider } from "./hooks/usePageData";
import { SSRProvider } from "./hooks/useSSR";
import IndexPage from "./routes/IndexPage";
import NotFoundPage from "./routes/NotFoundPage";
import Layout from "./components/Layout";
import theme from "./theme";
import "./globals.css";

interface AppProps {
  initialData: any;
}

export default function App({ initialData }: AppProps) {
  const [, navigate] = useLocation();
  
  useEffect(() => {
    const initialError = initialData?._error;
    if(initialError) {
      toast.error(initialError?.message || "Something Happened");
      
      if(initialError.status === 401) {
        // navigate(`/auth/login${qsStringify({ redirect: locationRef.current.pathname + locationRef.current.search + locationRef.current.hash })}`);
      } else if(initialError.status === 403) {
        navigate(`/`);
      }
    }
  }, [initialData, navigate]);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SSRProvider>
        <Router>
          <PageDataProvider initialData={initialData}>
            <Switch>
              <Route path="/"><Layout><IndexPage /></Layout></Route>
              <Route><Layout><NotFoundPage /></Layout></Route>
            </Switch>
            <ToastContainer position="bottom-right" newestOnTop />
          </PageDataProvider>
        </Router>
      </SSRProvider>
    </ThemeProvider>
  );
}
