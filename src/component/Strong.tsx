import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

interface StrongProps extends React.HTMLAttributes<HTMLElement>, HelpersProps {}

export class Strong extends React.Component<StrongProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    if (this.state.hasError) {
      return null
    }

    return renderElement('strong', this.props)
  }
}
