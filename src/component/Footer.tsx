import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export class Footer extends React.Component<FooterProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('footer', this.props, bulmaClassName.footer)
  }
}
