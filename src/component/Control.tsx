import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ControlProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    SizeProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLoading?: boolean
}

export class Control extends React.Component<ControlProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const {
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.control, {
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
    })
  }
}
