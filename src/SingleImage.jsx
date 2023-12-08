export default function SingleImage({ link, description }) {
  return (
    <img
      className="img"
      src={link}
      alt={description}
      onClick={() => window.open(link)}
    />
  )
}
