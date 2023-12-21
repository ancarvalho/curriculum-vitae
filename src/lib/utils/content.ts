import * as common from "./content/common.json"
import * as en from "./content/en/content.json"
import * as pt from "./content/pt/content.json"

export default {

en: {
  ...common,
  ...en
},
pt: {
  ...common,
  ...pt
}

};
