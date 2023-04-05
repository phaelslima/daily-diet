import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Masks } from 'react-native-mask-input'

import uuid from 'react-native-uuid'

import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Radio } from '@components/Radio'

import { mealCreate } from '@storage/meal/mealCreate'

import {
  Container,
  Context,
  Form,
  RadioGroup,
  RadioGroupFeedback,
  RadioGroupTitle,
  Row,
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
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('Campo obrigatório'),
      description: Yup.string()
        .min(2, 'Muito curto!')
        .max(150, 'Muito longo!')
        .required('Campo obrigatório'),
      date: Yup.string().required('Campo obrigatório'),
      hour: Yup.string().length(5).required('Campo obrigatório'),
      isOnDiet: Yup.boolean().required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      try {
        await mealCreate({
          ...values,
          id: uuid.v4(),
        } as any)

        navigation.navigate('feedback', {
          type: values.isOnDiet ? 'INSIDE' : 'OUTSIDE',
        })
      } catch (error) {
        Alert.alert('Nova Refeição', 'Não foi possível adicionar a refeição.')
      }
    },
  })

  return (
    <Container>
      <Header title="Nova refeição" />

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
              keyboardType="numeric"
              mask={Masks.DATE_DDMMYYYY}
              onChangeText={formik.handleChange('date')}
              onBlur={formik.handleBlur('date')}
              value={formik.values.date}
              feedback={formik.errors.date}
            />

            <Input
              title="Hora"
              style={{ marginLeft: 12 }}
              keyboardType="numeric"
              mask={[/[0-1]/, /\d/, ':', /[0-5]/, /\d/]}
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
                type="INSIDE"
                title="Sim"
                style={{ marginRight: 12 }}
                isActive={formik.values.isOnDiet === true}
                onPress={() => formik.setFieldValue('isOnDiet', true)}
              />

              <Radio
                type="OUTSIDE"
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
