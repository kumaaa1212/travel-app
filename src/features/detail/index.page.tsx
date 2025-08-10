import Layout from "@/Layout";
import Detail from ".";
import DetailHeader from "@/Layout/DetailHeader";

export default function DetailPage() {
  return (
    <Layout header={<DetailHeader />}>
      <Detail />
    </Layout>
  );
}
