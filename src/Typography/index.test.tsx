import React from 'react'
import { shallow } from 'enzyme'

import Typography from '.'

describe('Test Typography', () => {
  const renderWrapper = () => shallow(<Typography variant='h1'>dkm</Typography>)

  describe('Snapshots', () => {
    it('should match snapshots with label', () => {
      expect(renderWrapper()).toMatchSnapshot()
    })
  })
})