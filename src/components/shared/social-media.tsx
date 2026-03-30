import React from 'react'
import { Twitter, Facebook, Linkedin, Send } from 'lucide-react'

export default function SocialMedia() {
  return (
      <div className="flex space-x-3">
              <a
                href="https://twitter.com/fidro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow Fidro on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/fidro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow Fidro on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/fidro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow Fidro on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/fidro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Join Fidro on Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
  )
}
