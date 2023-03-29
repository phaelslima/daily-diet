import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Radio } from '@components/Radio'

import {
  BackButton,
  Container,
  Context,
  Form,
  Header,
  Icon,
  RadioGroup,
  RadioGroupTitle,
  Row,
  Title,
} from './styles'

export function NewMeal() {
  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      date: '',
      hour: '',
      isOnDiet: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>

        <Title>Nova refeição</Title>
      </Header>

      <Context>
        <Form>
          <Input
            title="Nome"
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            value={formik.values.name}
          />

          <Input
            multiline
            title="Descrição"
            textAlignVertical="top"
            inputStyle={{ height: 120 }}
            onChangeText={formik.handleChange('description')}
            onBlur={formik.handleBlur('description')}
            value={formik.values.description}
          />

          <Row>
            <Input
              title="Data"
              style={{ marginRight: 12 }}
              onChangeText={formik.handleChange('date')}
              onBlur={formik.handleBlur('date')}
              value={formik.values.date}
            />

            <Input
              title="Hora"
              style={{ marginLeft: 12 }}
              onChangeText={formik.handleChange('hour')}
              onBlur={formik.handleBlur('hour')}
              value={formik.values.hour}
            />
          </Row>

          <RadioGroup>
            <RadioGroupTitle>Está dentro da dieta?</RadioGroupTitle>

            <Row>
              <Radio
                type="POSITIVE"
                title="Sim"
                style={{ marginRight: 12 }}
                isActive={formik.values.isOnDiet === true}
                onPress={() => formik.setFieldValue('isOnDiet', true)}
              />

              <Radio
                type="NEGATIVE"
                title="Não"
                style={{ marginLeft: 12 }}
                isActive={formik.values.isOnDiet === false}
                onPress={() => formik.setFieldValue('isOnDiet', false)}
              />
            </Row>
          </RadioGroup>
        </Form>

        <Button
          title="Cadastrar refeição"
          onPress={formik.handleSubmit as any}
        />
      </Context>
    </Container>
  )
}
