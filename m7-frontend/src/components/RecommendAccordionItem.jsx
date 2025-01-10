import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RecommendPlusList from "./RecommendPlusList";

const RecommendAccordionItem = ({
  templateId,
  listId,
  title,
  data,
  setListData,
}) => {
  return (
    <div className="flex w-full ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className="max-h-[250px] overflow-y-auto scrollbar-thin">
            <RecommendPlusList
              templateId={templateId}
              listId={listId}
              data={data}
              setListData={setListData}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RecommendAccordionItem;
