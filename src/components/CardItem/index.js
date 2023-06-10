// Write your code here.
import './index.css'

const TechnologyCards = props => {
  const {cardObject} = props
  const {title, description, imgUrl, className} = cardObject
  const classNames = `card ${className}`
  return (
    <li className={classNames}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default TechnologyCards
