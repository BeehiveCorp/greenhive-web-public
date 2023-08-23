import './styles.scss'

const Grid = () => {
  return (
    <div className="grid">
      {Array(8)
        .fill(null)
        .map((_, idx) => (
          <div key={idx} className="grid__item" />
        ))}
    </div>
  )
}

export { Grid }
