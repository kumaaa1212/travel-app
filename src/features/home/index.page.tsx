import Layout from "@/Layout";
import Home from ".";
import HomeHeader from "@/Layout/HomeHeader";

export default function HomePage() {
  return (
    <Layout header={<HomeHeader />}>
      <Home />
    </Layout>
  );
}
