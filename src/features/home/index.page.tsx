import Layout from "@/Layout";
import Home from ".";
import HomeHeader from "@/Layout/HomeHeader";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

export default function HomePage() {
  return (
    <Layout header={<HomeHeader />}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense
          fallback={
            <Box>
              <CircularProgress color="secondary" />
            </Box>
          }
        >
          <Home />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
