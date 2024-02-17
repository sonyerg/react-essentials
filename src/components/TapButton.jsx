export default function TapButton({
  children,
  onSelect,
  isSelected,
  ...props
}) {
  //   document.querySelector("button").addEventListener("click", () => {});
  //  this is how you would do (onClick events) if youre using vanilla js

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
