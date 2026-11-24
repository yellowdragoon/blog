import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import PostLayout from '@/layouts/PostLayout'
import AuthorLayout from '@/layouts/AuthorLayout'

const layouts = { PostLayout, AuthorLayout }

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = layouts[layout]
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  // mdx-bundler compiles each post into a component; useMemo keeps it stable per post
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  // eslint-disable-next-line react-hooks/static-components
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
