import NewsPageContent from "./NewsPageContent";
import { caseStudies } from "@/lib/constants";

export default function NewsPage() {
  return <NewsPageContent caseStudies={caseStudies} />;
}
