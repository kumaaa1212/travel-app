import Layout from "@/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import CreateHeader from "@/Layout/CreateHeader";
import BasicInfo from ".";

export default function BasicInfoPage() {
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
          <BasicInfo />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
