export default function SnakeBody({ longueur, positions }) {

  let actualSkin = new Array(longueur).fill().map((el, i) => <div key={i} className="snake-skin" />)
  return (
    <div className="snake-body" style={{ top: positions.top, left: positions.left }}>
      {actualSkin}
    </div>
  )
}