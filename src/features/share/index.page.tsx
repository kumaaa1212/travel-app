import Layout from "@/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import ShareHeader from "@/Layout/ShareHeader";
import Share from ".";

export default function SharePage() {
  return (
    <Layout header={<ShareHeader />}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense
          fallback={
            <Box>
              <CircularProgress color="secondary" />
            </Box>
          }
        >
          <Share />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
