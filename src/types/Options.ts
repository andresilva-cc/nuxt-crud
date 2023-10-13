export type HttpMethod = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'

export type FieldType = 'TextField' | 'TextArea' | 'Select' | 'AutoComplete' | 'Checkbox' | 'Switch' | 'Combobox' | 'RadioButton' | 'Slider' | 'RangeSlider'

export interface Field {
  name: string
  type: FieldType,
  params?: any
}

export interface Resource {
  name: string
  fields?: Array<Field>
  routes?: {
    create: {
      method: HttpMethod,
      path: string
    },
    read: {
      method: HttpMethod,
      path: string
    },
    update: {
      method: HttpMethod,
      path: string
    },
    delete: {
      method: HttpMethod,
      path: string
    },
  }
}

export interface Options {
  baseUrl: string
  resources: Array<Resource>
}
