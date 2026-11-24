import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

const linkClass = 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'

export default function PrivacyPolicy() {
  return (
    <>
      <PageSEO
        title={`Privacy Policy - ${siteMetadata.author}`}
        description={`What ${siteMetadata.author}'s blog collects about visitors, and what it doesn't.`}
      />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <div className="prose pt-7 text-gray-600 dark:prose-dark dark:text-gray-300">
          <h1>Privacy Policy</h1>
          <p>Last updated: November 24, 2026</p>
          <p>
            This is a personal blog. It has no accounts, comments or newsletter, it doesn&apos;t set
            any cookies, and it doesn&apos;t sell or share information about you.
          </p>

          <h2>Analytics</h2>
          <p>
            The site uses{' '}
            <a
              className={linkClass}
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Vercel Web Analytics
            </a>{' '}
            to count page views. It records things like the page you visited, the site that referred
            you, and your browser, operating system, device type and country. It doesn&apos;t use
            cookies and doesn&apos;t identify you or track you across other websites.
          </p>

          <h2>Hosting</h2>
          <p>
            The site is hosted by{' '}
            <a
              className={linkClass}
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Vercel
            </a>
            , which processes standard request information, such as your IP address, to serve pages
            and protect the site from abuse.
          </p>

          <h2>Stored on your device</h2>
          <p>
            If you switch between light and dark mode, your choice is saved in your browser&apos;s
            local storage. It never leaves your device.
          </p>

          <h2>Links to other sites</h2>
          <p>
            Links to other sites, such as GitHub, X, LinkedIn or YouTube, are covered by those
            sites&apos; own privacy policies.
          </p>

          <h2>Contact</h2>
          <p>
            If you email me, I&apos;ll only use your address to reply. For any questions about this
            policy, email{' '}
            <a className={linkClass} href={`mailto:${siteMetadata.email}`}>
              {siteMetadata.email}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}
