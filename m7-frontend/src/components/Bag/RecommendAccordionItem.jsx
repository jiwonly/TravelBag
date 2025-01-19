import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RecommendPlusList from "./RecommendPlusList";

const RecommendAccordionItem = ({ categoryId }) => {
  let name = "";
  switch (categoryId) {
    case 1:
      name = "필수품";
      break;
    case 2:
      name = "의료품";
      break;
    case 3:
      name = "의류";
      break;
    case 4:
      name = "위생용품";
      break;
    case 5:
      name = "전자기기";
      break;
    case 6:
      name = "기타";
      break;
  }

  return (
    <div className="flex w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{name}</AccordionTrigger>
          <AccordionContent className="max-h-[250px] overflow-y-auto overflow-x-hidden scrollbar-thin">
            <RecommendPlusList categoryId={categoryId} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RecommendAccordionItem;
