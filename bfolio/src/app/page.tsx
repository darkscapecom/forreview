import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - Personal Portfolio NextJs Template",
};

export default function Home() {
  return (
    <HomeMain />
  );
}
