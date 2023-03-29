import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
  RadioGroupFeedback,
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
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('Campo obrigatório'),
      description: Yup.string()
        .min(2, 'Muito curto!')
        .max(150, 'Muito longo!')
        .required('Campo obrigatório'),
      date: Yup.string()
        .matches(
          /(\d){2}\/(\d){2}\/(\d){4}/,
          'A data deve ter este padrão "00/00/0000"'
        )
        .required('Campo obrigatório'),
      hour: Yup.string()
        .matches(/(\d){2}:(\d){2}/, 'A hora deve ter este padrão "00:00"')
        .length(5)
        .required('Campo obrigatório'),
      isOnDiet: Yup.boolean().required('Campo obrigatório'),
    }),
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
            valid={!formik.errors.name && formik.touched.name}
            feedback={formik.errors.name}
          />

          <Input
            multiline
            title="Descrição"
            textAlignVertical="top"
            inputStyle={{ height: 120 }}
            onChangeText={formik.handleChange('description')}
            onBlur={formik.handleBlur('description')}
            value={formik.values.description}
            feedback={formik.errors.description}
          />

          <Row>
            <Input
              title="Data"
              style={{ marginRight: 12 }}
              onChangeText={formik.handleChange('date')}
              onBlur={formik.handleBlur('date')}
              value={formik.values.date}
              feedback={formik.errors.date}
            />

            <Input
              title="Hora"
              style={{ marginLeft: 12 }}
              onChangeText={formik.handleChange('hour')}
              onBlur={formik.handleBlur('hour')}
              value={formik.values.hour}
              feedback={formik.errors.hour}
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

            <RadioGroupFeedback>{formik.errors.isOnDiet}</RadioGroupFeedback>
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
