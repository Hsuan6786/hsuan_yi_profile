import Icon104 from '/public/assets/icon-light-104.svg'
import IconBehance from '/public/assets/icon-light-behance.svg'
import IconMail from '/public/assets/icon-light-mail.svg'
import IconCake from '/public/assets/icon-light-cakeresume.svg'

export const contacts = {
  104: {
    icon: Icon104,
    to: 'https://pda.104.com.tw/profile/edit?vno=7661witr8',
  },
  cakeresume: {
    icon: IconCake,
    to: 'https://www.cakeresume.com/hsuanyeee',
  },
  behance: {
    icon: IconBehance,
    to: 'https://www.behance.net/jessie8581b968/projects',
  },
  mail: {
    icon: IconMail,
    to: 'mailto:hsuan88815@gmail.com',
  },
}

export const skills = [
  {
    title: 'UI / UX Design',
    skills: [
      '了解 html 和 CSS 基礎知識。',
      '運用UI Components確保網站一致性。',
      '使用Prototyping展示交互設計流程。',
      '建立Style Guide使設計和開發更協同。',
      '配合Bootstrap 及 grid 設計RWD 網站。',
    ],
    tools: ['figma', 'xd'],
  },
  {
    title: 'Visual Design',
    skills: [
      '依據客戶的素材提供客製化設計。',
      '依據設計需求製作 Banner 並依照版位需求延伸各種尺寸。',
      '製作報紙等排版印刷物。',
    ],
    tools: ['ps', 'ai'],
  },
  {
    title: 'Languages',
    skills: [
      '中文：母語',
      '台語：理解日常溝通',
      '英文：略懂 ',
      '日文：略懂 ( JLPT N3 ) ',
    ],
  },
  {
    title: 'Others',
    skills: [
      '能運用 After Effects 製作基礎動畫。',
      '能運用Premiere 基礎剪輯。',
    ],
    tools: ['ae', 'pr'],
  },
]
