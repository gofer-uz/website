import type { MetaRecord } from 'nextra'

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: {
    title: "Home",
    display: "hidden",
  },
  asoslar: "Asoslar",
  tuzilmalar: "Tuzilmalar va Interfeyslar",
  xatoliklar: "Xatoliklar",
  concurrency: "Concurrency",
  generics: "Generics",
  testlash: "Testlash",
  modullar: "Modullar va Paketlar",
  "standart-kutubxona": "Standart Kutubxona",
  "malumotlar-bazasi": "Ma'lumotlar Bazasi",
  dsa: "Algoritmlar va Ma'lumotlar Tuzilmalari",
  "dizayn-patternlar": "Dizayn Patternlar",
  kitoblar: "Manbalar va Kitoblar",
  "---": {
    type: "separator",
  },
  telegram: {
    title: "Telegram",
    type: "page",
    href: "https://t.me/goferuz",
  },
  blog: {
    title: "Blog",
    type: "page",
    href: "https://blog.gopher.uz",
  },
  sponsor: {
    title: "❤️ Sponsor",
    type: "page",
    href: "https://github.com/sponsors/gofer-uz",
  },
}

export default meta
