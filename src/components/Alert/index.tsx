import { Modal } from 'react-native'

import { Button } from '@components/Button'

import { Container, Footer, Overlay, Title } from './styles'

type Props = {
  visible: boolean
  onCancel: () => void
  onRemove: () => void
}

export function Alert({ visible, onCancel, onRemove }: Props) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      statusBarTranslucent
      onRequestClose={onCancel}
    >
      <Overlay>
        <Container>
          <Title>{`Deseja realmente excluir o \nregistro da refeição?`}</Title>
          <Footer>
            <Button
              mode="OUTLINED"
              title="Cancelar"
              style={{ marginRight: 6, width: '50%' }}
              onPress={onCancel}
            />
            <Button
              title="Sim, excluir"
              style={{ width: '50%', marginLeft: 6 }}
              onPress={onRemove}
            />
          </Footer>
        </Container>
      </Overlay>
    </Modal>
  )
}
