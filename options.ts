export type HttpMethod = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'

export type FieldType = 'TextField' | 'TextArea' | 'Select' | 'AutoComplete' | 'Checkbox' | 'Switch' | 'Combobox' | 'RadioButton' | 'Slider' | 'RangeSlider'

export interface Field {
  name: string
  type: FieldType,
  params?: any
}

export interface Resource {
  name: string
  fields: Array<Field>
  routes: {
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

export const options: Options = {
  baseUrl: 'http://localhost:3000',
  resources: [
    {
      name: 'brands',
      fields: [
        {
          name: 'name',
          type: 'TextField'
        },
        {
          name: 'description',
          type: 'TextArea'
        },
        {
          name: 'enabled',
          type: 'Switch'
        }
      ],
      routes: {
        create: {
          method: 'POST',
          path: '/brands'
        },
        read: {
          method: 'GET',
          path: '/brands'
        },
        update: {
          method: 'PATCH',
          path: '/brands/:id'
        },
        delete: {
          method: 'DELETE',
          path: '/brands/:id'
        }
      }
    }
  ]
}