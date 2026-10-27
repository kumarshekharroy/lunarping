import { Fragment } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import privacyText from '../data/app-privacy.txt?raw'

const headings = new Set(['Location and saved information','Optional place names','Camera and orientation','Notifications, alarms and lock screen','Optional online services and privacy choices','Reviews and updates','Feedback you choose to send','Retention, security and deletion','Changes and inquiries'])
const blocks = privacyText.trim().split(/\n\s*\n/)
const sections: { title: string; paragraphs: string[] }[] = []
for (const block of blocks.slice(2)) {
  const [firstLine, ...rest] = block.split('\n')
  if (headings.has(firstLine)) sections.push({ title: firstLine, paragraphs: [rest.join('\n')] })
  else sections.at(-1)?.paragraphs.push(block)
}
const sectionId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

function PolicyText({ text }: { text: string }) {
  return <>{text.split(/(https:\/\/[^\s)]+|contact@shekharroy\.com)/g).map((part, i) => {
    if (part.startsWith('https://')) {
      const url = part.replace(/[.,;!?]+$/, '')
      return <Fragment key={i}><a href={url}>{url}</a>{part.slice(url.length)}</Fragment>
    }
    return <Fragment key={i}>{part === 'contact@shekharroy.com' ? <a href={`mailto:${part}`}>{part}</a> : part}</Fragment>
  })}</>
}

export function PrivacyPage() {
  return <div id="top" className="privacy-page container">
    <a href="/app" className="text-link privacy-back"><ArrowLeft size={16} aria-hidden="true" /> Back to the app</a>
    <header className="privacy-heading"><span className="section-kicker">LUNARPING: SKY MAP &amp; ALARMS</span><h1>Privacy policy<span>.</span></h1><p>Your sky. Your choices.</p><div className="policy-meta"><span>Publisher: Shekhar Roy</span><span>Last updated: 27 October 2026</span></div><p className="policy-contact"><a href="mailto:contact@shekharroy.com">contact@shekharroy.com <ArrowUpRight size={14} aria-hidden="true" /></a></p></header>
    <div className="privacy-layout"><aside className="privacy-contents"><nav aria-label="Privacy policy contents"><span>IN THIS POLICY</span>{sections.map((section, i) => <a key={section.title} href={`#${sectionId(section.title)}`}><small>{String(i + 1).padStart(2,'0')}</small>{section.title}</a>)}</nav></aside>
      <article className="policy-copy" aria-label="LunarPing privacy policy"><p className="policy-introduction"><PolicyText text={blocks[1]} /></p>{sections.map((section, i) => <section id={sectionId(section.title)} key={section.title} aria-labelledby={`policy-heading-${i}`}><h2 id={`policy-heading-${i}`}><span>{String(i+1).padStart(2,'0')}</span>{section.title}</h2>{section.paragraphs.map((paragraph, index) => <p key={index}><PolicyText text={paragraph} /></p>)}</section>)}</article>
    </div>
  </div>
}
