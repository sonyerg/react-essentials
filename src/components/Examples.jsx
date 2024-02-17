import { EXAMPLES } from "../data";
import { useState } from "react";
import TapButton from "./TapButton";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  // selectedTopic: current state value, setSelected: function to change current state value,
  // useState(): initial state value

  function handleSelect(selectedButton) {
    // selectedButton => components, jsx, props, state.
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TapButton
          isSelected={selectedTopic === "components"}
          onClick={function () {
            handleSelect("components");
          }}
        >
          Components
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => {
            handleSelect("jsx");
          }}
        >
          JSX
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "props"}
          onClick={() => {
            handleSelect("props");
          }}
        >
          Props
        </TapButton>
        <TapButton
          isSelected={selectedTopic === "state"}
          onClick={() => {
            handleSelect("state");
          }}
        >
          State
        </TapButton>
      </menu>
      {!selectedTopic && <p>Please select a topic.</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
