import Image from "next/image"
import type React from "react"

// Simple inline GitHub icon to avoid extra deps
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.39-3.9-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.41-1.26.75-1.55-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.45-2.31 1.2-3.12-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.85 1.2 3.12 0 4.46-2.71 5.44-5.29 5.73.42.36.8 1.07.8 2.17v3.21c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-8 border border-dashed border-gray-300 bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-3">
          {/* Left: copyright */}
          <div className="text-sm text-muted-foreground sm:justify-self-start">
            <span aria-label={`Copyright ${year}`}>© {year}</span> <span>Trag All rights reserved</span>
          </div>

          {/* Center: brand name */}

          <div className="text-center items-center space-x-4 flex font-semibold text-foreground sm:justify-self-center">
            
            <Image 
                                    src={'trag.svg'}
                                    height={40}
                                    width={40}
                                    alt='trag-logo'
                                  />
            <span className="text-3xl">
            Trag
            </span>

            
            </div>

          {/* Right: two GitHub icons */}
          <nav aria-label="Footer links" className="flex items-center justify-center gap-4 sm:justify-self-end">
            <a
              href="https://github.com/Dinesht04"
              aria-label="Dinesh Tyagi Github Link"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon />
            </a>
            <a
              href="https://github.com/PranshuRaj1"
              aria-label=""
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
