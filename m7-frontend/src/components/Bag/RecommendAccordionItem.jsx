import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RecommendPlusList from "./RecommendPlusList";
import { categoryState } from "@/api/Bag/atom";
import { useRecoilValue } from "recoil";

const RecommendAccordionItem = ({ categoryId, ItemByCategory }) => {
  const categories = useRecoilValue(categoryState);
  const thisCategory = categories.find(
    (category) => String(category.id) === String(categoryId)
  );

  let name = "";
  switch (thisCategory.name) {
    case "ESSENTIAL":
      name = "필수품";
      break;
    case "CLOTHING":
      name = "의류";
      break;
    case "TOILETRIES":
      name = "위생용품";
      break;
    case "ELECTRONICS":
      name = "전자기기";
      break;
    case "MEDICALS":
      name = "의료품";
      break;
    case "OTHER":
      name = "기타";
      break;
  }

  return (
    <div className="flex w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{name}</AccordionTrigger>
          <AccordionContent className="max-h-[250px] overflow-y-auto scrollbar-thin">
            <RecommendPlusList
              categoryId={categoryId}
              ItemByCategory={ItemByCategory}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RecommendAccordionItem;
