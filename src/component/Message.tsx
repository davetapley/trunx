import * as React from 'react'

import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
} from './modifiers'
import { renderElement } from './renderElement'

interface MessageProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps {
  isDark?: boolean
}

export interface MessageBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface MessageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

class MessageBody extends React.Component<MessageBodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.messageBody)
  }
}

class MessageHeader extends React.Component<MessageHeaderProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.messageHeader)
  }
}

export class Message extends React.Component<MessageProps> {
  static Body = MessageBody
  static Header = MessageHeader

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('article', this.props, bulmaClassName.message)
  }
}
