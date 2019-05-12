import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface ISpanProps extends IBackgroundColorHelpersProps,
                             ITextColorHelpersProps,
                             React.HTMLAttributes<HTMLSpanElement> {}

export default class Span extends React.Component<ISpanProps> {
  render() {
    const {
      hasBackgroundBlack,
      hasBackgroundBlackBis,
      hasBackgroundBlackTer,
      hasBackgroundDanger,
      hasBackgroundDark,
      hasBackgroundGrey,
      hasBackgroundGreyDark,
      hasBackgroundGreyDarker,
      hasBackgroundGreyLight,
      hasBackgroundGreyLighter,
      hasBackgroundInfo,
      hasBackgroundLight,
      hasBackgroundLink,
      hasBackgroundPrimary,
      hasBackgroundSuccess,
      hasBackgroundWarning,
      hasBackgroundWhite,
      hasBackgroundWhiteBis,
      hasBackgroundWhiteTer,
      hasTextBlack,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextDanger,
      hasTextDark,
      hasTextGrey,
      hasTextGreyDark,
      hasTextGreyDarker,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextInfo,
      hasTextLight,
      hasTextLink,
      hasTextPrimary,
      hasTextSuccess,
      hasTextWarning,
      hasTextWhite,
      hasTextWhiteBis,
      hasTextWhiteTer,
      ...props
    } = this.props

    const className = classnames(
      backgroundColorHelpersPropsToClassenames({
        hasBackgroundBlack,
        hasBackgroundBlackBis,
        hasBackgroundBlackTer,
        hasBackgroundDanger,
        hasBackgroundDark,
        hasBackgroundGrey,
        hasBackgroundGreyDark,
        hasBackgroundGreyDarker,
        hasBackgroundGreyLight,
        hasBackgroundGreyLighter,
        hasBackgroundInfo,
        hasBackgroundLight,
        hasBackgroundLink,
        hasBackgroundPrimary,
        hasBackgroundSuccess,
        hasBackgroundWarning,
        hasBackgroundWhite,
        hasBackgroundWhiteBis,
        hasBackgroundWhiteTer,
      }),
      textColorHelpersPropsToClassenames({
        hasTextBlack,
        hasTextBlackBis,
        hasTextBlackTer,
        hasTextDanger,
        hasTextDark,
        hasTextGrey,
        hasTextGreyDark,
        hasTextGreyDarker,
        hasTextGreyLight,
        hasTextGreyLighter,
        hasTextInfo,
        hasTextLight,
        hasTextLink,
        hasTextPrimary,
        hasTextSuccess,
        hasTextWarning,
        hasTextWhite,
        hasTextWhiteBis,
        hasTextWhiteTer,
      }),
    )

    return (
      <span {...props} className={className}>{this.props.children}</span>
    )
  }
}
