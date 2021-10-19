/* eslint-disable camelcase */
import { extend, configure, localize } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import {
  email,
  required,
  max,
  confirmed,
  numeric,
} from 'vee-validate/dist/rules'

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
  mode: 'eager',
})

localize('ja', ja)

extend('required', {
  ...required,
  message: '{_field_} is required.',
})

extend('max', {
  ...max,
  message: '{_field_}は最大{length}文字まで入力できます。',
})

extend('password', {
  validate(value) {
    if (!value) return false
    const pattern = /^(?=.*\d)(?=.*[a-zA-Z])[^\s]{5,20}$/
    return pattern.test(value)
  },
  message:
    '{_field_} is not valid.',
})

extend('confirmedEmail', {
  ...confirmed,
  message: 'メールアドレス と メールアドレス（確認） が一致しません。',
})

extend('confirmedPassword', {
  ...confirmed,
  message: 'パスワード と パスワード（確認） が一致しません。',
})

extend('newConfirmedPassword', {
  ...confirmed,
  message: '新しいパスワード と 新しいパスワード（確認） が一致しません。',
})

extend('numeric', {
  ...numeric,
})

extend('email', {
  ...email,
  message: '{_field_} is not valid.',
})

extend('telephone', {
  validate(value) {
    if (!value) return false
    const pattern = /^(?:\+?\d+-)?\d+(?:-\d+){2}$|^\+?\d+$/
    return pattern.test(value)
  },
  message: '{_field_} is not valid.',
})
