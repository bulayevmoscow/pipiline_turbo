import {it, vi} from 'vitest'
import {render, screen} from '@testing-library/react'
import App from './App'

vi.mock("@common/HelloWorld", () =>  ({
    HelloWorld: () => <div>moCked!</div>
}))

it('fn should work', () => {
    render(<App/>);
    screen.debug()
})
