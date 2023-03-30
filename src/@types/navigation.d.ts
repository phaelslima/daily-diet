import { FeedbackTypeStyleProps } from '@screens/Feedback/styles'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      feedback: { type: FeedbackTypeStyleProps }
      new: undefined
      statistics: undefined
    }
  }
}
