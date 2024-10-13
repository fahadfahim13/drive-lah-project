import type { Metadata } from "next";
import SubscriptionPlan from "./components/Subscription";

export default function IndexPage() {
  return <SubscriptionPlan />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
