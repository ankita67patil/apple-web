import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        
        {/* Info Section */}
        <div>
          <p className="font-semibold text-gray text-xs">
            This is a frontend UI clone built for learning and educational purposes only.
          </p>
          <p className="font-semibold text-gray text-xs mt-1">
            Not affiliated with or endorsed by Apple Inc.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        {/* Bottom Section */}
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-2">
          <p className="font-semibold text-gray text-xs">
            © 2024 UI Clone Project. All rights reserved.
          </p>

          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
