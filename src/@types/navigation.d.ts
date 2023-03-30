import { FeedbackTypeStyleProps } from '@screens/Feedback/styles'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      new: undefined
      edit: undefined
      feedback: { type: FeedbackTypeStyleProps }
    }
  }
}
