import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RecommendPlusList from "./RecommendPlusList";

const RecommendAccordionItem = ({ title, data }) => {
  return (
    <div className="flex w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>
            <RecommendPlusList data={data} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RecommendAccordionItem;
