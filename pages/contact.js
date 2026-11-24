import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="overflow-hidden pt-6">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact
        </h1>
        <div className="pb-8 pt-10">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href="mailto:henry.li.london@gmail.com"
              title="gmail"
              icon="henry.li.london"
            />
            <ContactLink
              href="https://github.com/yellowdragoon"
              title="github"
              icon="yellowdragoon"
            />
            <ContactLink href="https://x.com/yellowdragoon1" title="x" icon="yellowdragoon1" />
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
