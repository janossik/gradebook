import React from "react"
import StyledProvider from "../src/providers/StyledProvider"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'background',
    values: [
      {
        name: 'primary',
        value: '#23b2ee',
      },
      {
        name: 'secondary',
        value: '#838BD0',
      },
      {
        name: 'trinary',
        value: '#76DF74',
      },
      {
        name: 'text',
        value: '#737c8e',
      },
      {
        name: 'background',
        value: 'snow',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story)=>(
    <StyledProvider>
      <Story/>
    </StyledProvider>
  )
]