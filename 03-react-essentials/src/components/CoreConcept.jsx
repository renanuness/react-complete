

export default function CoreConcept({description, image, title}){
    return(
      <li>
        <img src={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }