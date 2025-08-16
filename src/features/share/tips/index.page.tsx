import Layout from "@/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import PageHeader from "@/Layout/PageHeader";
import ShareTips from ".";

export default function ShareTipsPage() {
  return (
    <Layout
      header={
        <PageHeader title="旅行を共有" subtitle="リンクをコピーしてシェア" />
      }
    >
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense
          fallback={
            <Box>
              <CircularProgress color="secondary" />
            </Box>
          }
        >
          <ShareTips />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
