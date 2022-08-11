export default function (req, res) {
  const arr = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Qoli' }
  ]

  res.status(200).json(arr)
}
