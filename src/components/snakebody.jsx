export default function SnakeBody({ actualSkin, positions }) {
  return (
    <div className="snake-body" style={{ top: positions.top, left: positions.left }}>
      {actualSkin}
    </div>
  )
}