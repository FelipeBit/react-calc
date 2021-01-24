import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calculator test', ()=> {
    it('should be able to render without errors', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('should clean input',() => {
        const { getByTestId, getByText} = render(<App />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('C'))
        expect(getByTestId('screenInput')).toHaveValue('0')
    })

    it('2 + 3 should be 5',() => {
        const { getByTestId, getByText} = render(<App />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('+'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('screenInput')).toHaveValue('5')
    })

    it('4 - 3 should be 1',() => {
        const { getByTestId, getByText} = render(<App />)
        fireEvent.click(getByText('4'))
        fireEvent.click(getByText('-'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('screenInput')).toHaveValue('1')
    })

    it('3 / 3 should be 1',() => {
        const { getByTestId, getByText} = render(<App />)
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('/'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('screenInput')).toHaveValue('1')
    })

    it('2 * 3 should be 6',() => {
        const { getByTestId, getByText} = render(<App />)
        fireEvent.click(getByText('2'))
        fireEvent.click(getByText('*'))
        fireEvent.click(getByText('3'))
        fireEvent.click(getByText('='))
        expect(getByTestId('screenInput')).toHaveValue('6')
    })

    it('Should be zero after press C button', ()=> {
        const { getByTestId, getByText} = render(<App />)
        fireEvent.click(getByText('C'))
        expect(getByTestId('screenInput')).toHaveValue('0')

    })
})