export default function SnakeBody({ longueur }) {
  let actualSkin = new Array(longueur).fill().map((el, i) => <div key={i} className="snake-skin" />)
  return (
    <div className="snake-body">
      {actualSkin}
    </div>
  )
}