import { useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Masks } from 'react-native-mask-input'

import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { Radio } from '@components/Radio'

import { mealGetById } from '@storage/meal/mealGetById'
import { mealUpdateById } from '@storage/meal/mealUpdateById'

import {
  Container,
  Context,
  Form,
  RadioGroup,
  RadioGroupFeedback,
  RadioGroupTitle,
  Row,
} from './styles'

type Params = {
  id: string
}

export function EditMeal() {
  const navigation = useNavigation()
  const route = useRoute()

  const params = route.params as Params

  const formik = useFormik({
    initialValues: {
      id: '',
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
      date: Yup.string().required('Campo obrigatório'),
      hour: Yup.string().length(5).required('Campo obrigatório'),
      isOnDiet: Yup.boolean().required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      try {
        await mealUpdateById(values as any)
        navigation.navigate('home')
      } catch (error) {
        Alert.alert(
          'Atualizar Refeição',
          'Não foi possível atualizar a refeição.'
        )
      }
    },
  })

  async function getMeal() {
    const meal = await mealGetById(params.id)

    formik.setValues({
      id: meal?.id,
      name: meal?.name,
      description: meal?.description,
      date: meal?.date,
      hour: meal?.hour,
      isOnDiet: meal?.isOnDiet,
    } as any)
  }

  useEffect(() => {
    getMeal()
  }, [])

  return (
    <Container>
      <Header title="Editar refeição" />

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
          title="Salvar alterações"
          onPress={formik.handleSubmit as any}
        />
      </Context>
    </Container>
  )
}
