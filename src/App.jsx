import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import TextInput from "./components/forms/TextInput";
import NumberInput from "./components/forms/NumberInput";
import DateInput from "./components/forms/DateInput";
import TimeInput from "./components/forms/TimeInput";
import Select from "./components/forms/Select";
import MultiSelect from "./components/forms/MultiSelect";
import RadioGroup from "./components/forms/RadioGroup";
import CheckboxGroup from "./components/forms/CheckboxGroup";
import DynamicFormArray from "./components/forms/DynamicFormArray";

function App() {
  const printCounterValue = (step, value) => {
    console.log({ step, value });
  };

  return (
    <div className="App">
      <Counter emitCounterValue={printCounterValue} />
      <Counter step={10} emitCounterValue={printCounterValue} />

      <hr />

      <h2>Forms</h2>
      <TextInput initialValue="React" />
      <NumberInput initialValue={20} />
      <DateInput initialValue={new Date(2000, 0, 1)} />
      <TimeInput initialValue={new Date().setHours(20, 30)} />
      <Select
        options={[
          { value: "Angular", label: "Angular" },
          { value: "React", label: "React" },
          { value: "Vue", label: "Vue" },
        ]}
        initialValue={"React"}
      />
      <MultiSelect
        options={[
          { value: "Angular", label: "Angular" },
          { value: "React", label: "React" },
          { value: "Vue", label: "Vue" },
        ]}
        initialValue={["React", "Angular"]}
      />
      <RadioGroup
        name="car"
        options={[
          { value: "Angular", label: "Angular" },
          { value: "React", label: "React" },
          { value: "Vue", label: "Vue" },
        ]}
        initialValue={"React"}
      />
      <CheckboxGroup
        name="car"
        options={[
          { value: "Angular", label: "Angular" },
          { value: "React", label: "React" },
          { value: "Vue", label: "Vue" },
        ]}
        initialValue={["React", "Angular"]}
      />
      <DynamicFormArray />
    </div>
  );
}

export default App;
