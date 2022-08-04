export default function Header () {
  return (
    <header>
      <img src='/images/logo.png' />
      <h2>My Header</h2>
      <style jsx>{`
        img {
          width: 100px;
        }
        h2 {
          margin: 1rem;
        }
        header {
          display: flex;
        }
      `}</style>
    </header>
  )
}
