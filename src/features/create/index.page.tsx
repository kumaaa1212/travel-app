import Layout from "@/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import Create from ".";
import CreateHeader from "@/Layout/CreateHeader";

export default function CreatePage() {
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
          <Create />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
