import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import classNames from '@/lib/classnames'
import Link from './Link'
import {
  HomeIcon,
  Pencil1Icon,
  HamburgerMenuIcon,
  Link2Icon,
  PersonIcon,
  ArchiveIcon,
} from '@radix-ui/react-icons'
import useSound from 'use-sound'

const menuGroups = [
  [
    { href: '/', label: 'Home', Icon: HomeIcon },
    { href: '/blog', label: 'Blog', Icon: Pencil1Icon },
    { href: '/projects', label: 'Projects', Icon: ArchiveIcon },
    { href: '/about', label: 'About', Icon: PersonIcon },
  ],
  [{ href: '/contact', label: 'Contact', Icon: Link2Icon }],
]

export default function DropMenu() {
  const [ThemeSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <Menu as="div" className="relative z-10 inline-block text-left">
      <div>
        <MenuButton
          as={motion.button}
          className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-2 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
          whileTap={{
            scale: 0.5,
          }}
          transition={{ duration: 0.1, ease: 'easeIn' }}
          aria-label="Toggle List Menu"
        >
          <HamburgerMenuIcon className="h-4 w-4" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => ThemeSound()}
        afterLeave={() => ThemeSound()}
      >
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800">
          {menuGroups.map((group) => (
            <div className="py-1" key={group[0].href}>
              {group.map(({ href, label, Icon }) => (
                <MenuItem key={href}>
                  {({ focus }) => (
                    <Link
                      href={href}
                      className={classNames(
                        focus
                          ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
                          : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      <div className="flex flex-row">
                        <Icon className="mr-4 mt-0.5" /> {label}
                      </div>
                    </Link>
                  )}
                </MenuItem>
              ))}
            </div>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  )
}
