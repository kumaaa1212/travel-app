import Layout from "@/Layout";
import DetailInfo from ".";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import CreateHeader from "@/Layout/CreateHeader";

export default function DetailInfoPage() {
  return (
    <Layout header={<CreateHeader />}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense
          fallback={
            <Box>
              <CircularProgress color="secondary" />
            </Box>
          }
        >
          <DetailInfo />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
