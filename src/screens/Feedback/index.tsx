import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'

import InsideTheDiet from '@assets/inside_the_diet.svg'
import OutsideTheDiet from '@assets/outside_the_diet.svg'

import {
  Container,
  Description,
  FeedbackTypeStyleProps,
  ImageContainer,
  Strong,
  Title,
} from './styles'

type RouteParams = {
  type: FeedbackTypeStyleProps
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()

  const { type } = route.params as RouteParams

  return (
    <Container>
      <Title type={type}>
        {type === 'SUCCESS' ? 'Continue assim!' : 'Que pena!'}
      </Title>

      {type === 'SUCCESS' ? (
        <Description>
          Você continua <Strong>dentro da dieta</Strong>. Muito bem!
        </Description>
      ) : (
        <Description>
          Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
          esforçando e não desista!
        </Description>
      )}

      <ImageContainer>
        {type === 'SUCCESS' ? <InsideTheDiet /> : <OutsideTheDiet />}
      </ImageContainer>

      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  )
}
