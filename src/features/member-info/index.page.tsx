import Layout from "@/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import PageHeader from "@/Layout/PageHeader";
import MemberInfo from ".";

export default function MemberInfoPage() {
  return (
    <Layout header={<PageHeader title="新しい旅行を作成" subtitle="ステップ3/3" />}>
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
