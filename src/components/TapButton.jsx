export default function TapButton({ children, onSelect }) {
  //   document.querySelector("button").addEventListener("click", () => {});
  //  this is how you would do (onClick events) if youre using vanilla js

  return (
    <li>
      <button className="active" onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
