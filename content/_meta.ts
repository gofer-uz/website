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
