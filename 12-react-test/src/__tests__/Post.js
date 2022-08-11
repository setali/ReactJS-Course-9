import { unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Post from '../Post'
import { createRoot } from 'react-dom/client'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('Post fetching data', async () => {
  const fakePost = {
    id: 1,
    title: 'Post title',
    body: 'Post body'
  }

  jest.spyOn(global, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakePost)
    })
  })

  const root = createRoot(container)
  await act(async () => {
    root.render(<Post />)
  })

  expect(container.querySelector('h1').textContent).toBe('Post item')
  expect(container.querySelector('p').textContent).toBe(fakePost.title)

  global.fetch.mockRestore()
})
