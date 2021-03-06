import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    HelpersProps,
    SizeProps {}

export class Label extends React.Component<LabelProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('label', this.props, bulmaClassName.label)
  }
}
