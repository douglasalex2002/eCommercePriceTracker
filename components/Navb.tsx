import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const navIcons = [
  { src: "/assets/icons/search-alt-2-svgrepo-com.svg", alt: "search"},
  { src: "/assets/icons/heart-svgrepo-com.svg", alt: "heart"}, 
  { src: "/assets/icons/user-svgrepo-com.svg", alt: "user"}
]

const Navb = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <p className="nav-logo">
            Price<span className="text-blue-500">Tracker</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.src}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navb