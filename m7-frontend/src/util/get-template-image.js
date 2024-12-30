import TemplateImage_1 from "./../assets/TemplateImage_1.png";
import TemplateImage_2 from "./../assets/TemplateImage_2.png";
import TemplateImage_3 from "./../assets/TemplateImage_3.png";
import TemplateImage_4 from "./../assets/TemplateImage_4.png";

export function getTemplateImage(templateId) {
  switch (templateId) {
    case 1:
      return TemplateImage_1;
    case 2:
      return TemplateImage_2;
    case 3:
      return TemplateImage_3;
    case 4:
      return TemplateImage_4;
  }
}
