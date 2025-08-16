import Layout from "@/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import TravelInfoView from ".";
import ViewHeader from "@/Layout/ViewHeader";

export default function TravelInfoViewPage() {
  return (
    <Layout
      header={
        <ViewHeader title="旅行名が入る" subtitle="リンクをコピーしてシェア" />
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
          <TravelInfoView />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
