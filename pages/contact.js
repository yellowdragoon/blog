import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:lih8@tcd.ie" title="gmail" icon="lih8" />
            <ContactLink
              href="https://github.com/yellowdragoon"
              title="github"
              icon="yellowdragoon"
            />
            <ContactLink
              href="https://twitter.com/yellowdragoon1"
              title="twitter"
              icon="yellowdragoon1"
            />
            <ContactLink
              href="https://www.linkedin.com/in/henry-li-219a511b8/"
              title="linkedin"
              icon="henryli"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
