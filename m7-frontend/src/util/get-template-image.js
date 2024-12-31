import TemplateImage_0 from "./../assets/TemplateImage_0.png";
import TemplateImage_1 from "./../assets/TemplateImage_1.png";
import TemplateImage_2 from "./../assets/TemplateImage_2.png";
import TemplateImage_3 from "./../assets/TemplateImage_3.png";

export function getTemplateImage(templateId) {
  switch (templateId) {
    case 0:
      return TemplateImage_0;
    case 1:
      return TemplateImage_1;
    case 2:
      return TemplateImage_2;
    case 3:
      return TemplateImage_3;
  }
}
