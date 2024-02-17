import "./CoreConcept.css";

// props are "custom HTML attributes" set on components
export default function CoreConcept({ image, title, description }) {
  // use object destructuring to props
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
