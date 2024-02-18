import React from "react";

export default function Tabs({ buttons, children, ButtonsContainer = "menu" }) {
  // set two different slot in tab component
  //   const ButtonsContainer = buttonsContainer;
  return (
    <>
      {/* make tapbutton(button) a prop */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {/* and then insert the tabContent as children */}
      {children}
    </>
  );
}
