import Layout from "@/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import CreateHeader from "@/Layout/CreateHeader";
import MemberInfo from ".";

export default function MemberInfoPage() {
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
          <MemberInfo />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
