import { StatisticCard } from '@components/StatisticCard'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import {
  Button,
  Container,
  Content,
  ContentTitle,
  Description,
  Header,
  Icon,
  Row,
  Title,
} from './styles'

export function Statistics() {
  const navigation = useNavigation()
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <Button onPress={() => navigation.goBack()}>
          <Icon />
        </Button>
        <Title>90,86%</Title>
        <Description>das refeições dentro da dieta</Description>
      </Header>
      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <StatisticCard
          title="22"
          description="melhor sequência de pratos dentro da dieta"
        />

        <StatisticCard title="109" description="refeições registradas" />

        <Row>
          <StatisticCard
            title="99"
            description="refeições dentro da dieta"
            style={{
              marginRight: 6,
              backgroundColor: theme.COLORS.GREEN_LIGHT,
            }}
          />
          <StatisticCard
            title="10"
            description="refeições fora da dieta"
            style={{ marginLeft: 6, backgroundColor: theme.COLORS.RED_LIGHT }}
          />
        </Row>
      </Content>
    </Container>
  )
}
