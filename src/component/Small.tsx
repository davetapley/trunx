import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SmallProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export class Small extends React.Component<SmallProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('small', this.props)
  }
}
