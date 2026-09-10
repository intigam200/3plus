import { localeString } from "./objects/localeString";
import { localeText } from "./objects/localeText";
import { pageHeroBlock } from "./objects/pageHeroBlock";
import { textSectionBlock } from "./objects/textSectionBlock";
import { cardsSectionBlock } from "./objects/cardsSectionBlock";
import { brand } from "./brand";
import { product } from "./product";
import { solutionCategory } from "./solutionCategory";
import { page } from "./page";
import { rfqSubmission } from "./rfqSubmission";
import { notifySignup } from "./notifySignup";

export const schemaTypes = [
  // objects
  localeString,
  localeText,
  pageHeroBlock,
  textSectionBlock,
  cardsSectionBlock,
  // documents
  brand,
  product,
  solutionCategory,
  page,
  rfqSubmission,
  notifySignup,
];
