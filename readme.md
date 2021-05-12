[![license](https://img.shields.io/badge/license-WTFPL-%23000000)](http://www.wtfpl.net/)
[![npm version](https://img.shields.io/npm/v/tripsit-api?logo=npm)](https://www.npmjs.com/package/tripsit-api)
# [tripsit-api](https://www.npmjs.com/package/tripsit-api)
A Node.js wrapper for [tripsit.me's API](https://tripbot.tripsit.me/api/) <3

## Getting Started

Install the package
```bash
npm install tripsit-api
```

Try it out!
```javascript
const tripsitAPI = require('tripsit-api');

tripsitAPI.getInteraction("lsd", "mdma")
.then( (data) => {
  console.log(data);
});
```
This will print:
```
{
    status: 'Low Risk & Synergy',
    interactionCategoryA: 'lsd',
    interactionCategoryB: 'mdma'
}
```

---

# Documentation
Some information about this package and tripsit.me's API!

#### getInteraction(drugA, drugB)
Returns the interaction between drugA and drugB.

`status` will be one of the following:
- "Low Risk & Synergy"
- "Low Risk & No Synergy"
- "Low Risk & Decrease"
- "Caution"
- "Unsafe"
- "Dangerous"
- "Unknown"

Information about what these statuses mean can be found [here](https://combo.tripsit.me/).

```
{
    status: "status",
    interactionCategoryA: "drugA category name",
    interactionCategoryB: "drugB category name"
}
```

#### getDrug(drugName)
Returns information for the given drug.

This returns a lot of information and some of the properties vary depending on the drug! But it'll look something like this:
```
{
  name: "drug name",
  properties: {
    summary: "description of the drug",
    dose: "all dose types, doses, and dose note",
    effects: "effect, effect, ...",
    aliases: [ "alias", ... ],
    categories: [ "category name", ... ],
    duration: "formatted duration",
    onset: "formatted onset",
    half-life: "formatted half life",
    after-effects: "formatted after effects",
    wiki: "url"
  },
  aliases: [ "alias", ... ],
  categories: [ "category name", ... ],
  formatted_dose: {
    "Dose Type": {
      Light: "int-int unit",
      Common: "int-int unit",
      Strong: "int-int unit",
      Heavy: "int unit+",
    },
    ...
  },
  formatted_duration: {
    value: "int-int",
    _unit: "unit"
  },
  formatted_onset: {
    value: "int-int",
    _unit: "unit"
  },
  formatted_aftereffects: {
    value: "int-int",
    _unit: "unit"
  },
  formatted_effects: [ "effect name", ... ],
  pretty_name: "Pretty Capitalized Drug Name",
  dose_note: "Important note regarding the dose"
  links: {
    "link title": "url",
    ...
  },
  sources: {
    _general: [
      "brief description of the source - url",
      ...
    ]
  },
  pweffects: {
    "effect name": "url to psychonautwiki page for effect",
    ...
  }
}
```

#### getAllDrugNames()
Returns an array of strings. This array includes every drug name.
```
[
  "name",
  ...
]
```

#### getAllDrugNamesByCategory(category)
Returns an array of strings. This array includes every drug name that fits the given category, not including aliases.
```
[
  "name",
  ...
]
```

#### getAllDrugs()
Returns an array of every single drug. Each drug is in the same format as [`getDrug()`](https://github.com/AcidicNic/tripsit-api#getdrug(drugname)).
```
[
  {drug object},
  ...
]
```

#### getAllCategories()
Returns a list of all categories.
```
[
  {
    name: "category name",
    description: "description",
    wiki: "url"
  },
  ...
]
```

#### getAllDrugAliases()
Returns an array of strings. This array includes all drug names and aliases. Aliases are valid inputs for [`getDrug()`](https://github.com/AcidicNic/tripsit-api#getdrug(drugname)) and [`getInteraction()`](https://github.com/AcidicNic/tripsit-api#getinteraction(druga,-drugb)).
```
[
  "name",
  "alias",
  ...
]
```

#### Errors
Any errors, like an invalid drug or category name, will return the following:
```
{
  err: true,
  msg: "some error message"
}
```
