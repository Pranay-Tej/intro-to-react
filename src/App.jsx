import { format, parse } from "date-fns";
import React, { useMemo, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CheckboxGroup from "./components/forms/CheckboxGroup";
import DynamicFormArray from "./components/forms/DynamicFormArray";
import RadioGroup from "./components/forms/RadioGroup";
import Select from "./components/forms/Select";
import TextInput from "./components/forms/TextInput";

function App() {
  const printCounterValue = (step, value) => {
    console.log({ step, value });
  };

  const [username, setUsername] = useState("");
  const [age, setAge] = useState(18);
  const [dateOfBirth, setDateOfBirth] = useState(
    format(new Date(2000, 0, 1), "yyyy-MM-dd")
  );

  const formattedDate = useMemo(
    () => format(parse(dateOfBirth, "yyyy-MM-dd", new Date()), "dd.MM.yyyy"),
    [dateOfBirth]
  );
  const [timeOfBirth, setTimeOfBirth] = useState(
    format(new Date().setHours(20, 30), "HH:mm")
  );

  const formattedTime = useMemo(
    () => format(parse(timeOfBirth, "HH:mm", new Date()), "yyyy.MM.dd.HH.mm"),
    [timeOfBirth]
  );
  const [country, setCountry] = useState();
  const [plan, setPlan] = useState();
  const [interestList, setInterestList] = useState([]);
  const [addonList, setAddonList] = useState([]);
  const [itemList, setItemList] = useState([]);

  return (
    <div className="App">
      <Counter emitCounterValue={printCounterValue} />
      <Counter step={10} emitCounterValue={printCounterValue} />

      <hr />

      <h2>Forms</h2>

      <h2>Controlled Forms without Library</h2>

      <h3>Text Input</h3>
      <TextInput
        name="Username"
        type="text"
        value={username}
        control={setUsername}
      />

      <p>Name: {username}</p>

      <hr />

      <h3>Number Input</h3>
      <TextInput name="Age" type="number" value={age} control={setAge} />

      <p>Age: {age}</p>

      <hr />

      <h3>Date Input</h3>
      <TextInput
        name="Date of Birth"
        type="date"
        value={dateOfBirth}
        control={setDateOfBirth}
      />

      <p>Date of Birth: {dateOfBirth}</p>
      <span>Formatted Date: {formattedDate}</span>

      <hr />

      <h3>Time Input</h3>
      <TextInput
        name="Time of Birth"
        type="time"
        value={timeOfBirth}
        control={setTimeOfBirth}
      />

      <p>Time of Birth: {timeOfBirth}</p>
      <span>Formatted Time: {formattedTime}</span>

      <hr />

      <h3>Select</h3>

      <h4>Single Select</h4>
      <Select
        name="Country"
        value={country}
        control={setCountry}
        options={[
          { label: "India", value: "India" },
          { label: "US", value: "US" },
          { label: "Australia", value: "Australia" },
        ]}
      />
      <p>Country: {country}</p>

      <h4>Multi Select</h4>
      <Select
        name="Interests"
        value={interestList}
        control={setInterestList}
        multiple={true}
        options={[
          { label: "Drawing", value: "Drawing" },
          { label: "Games", value: "Games" },
          { label: "Movies", value: "Movies" },
        ]}
      />
      <p>
        [
        {interestList.map((interest, index) => (
          <span key={interest}>
            {interest}
            {index < interestList.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </p>

      <hr />

      <h3>Radio Group</h3>
      <p>Choose a plan</p>

      <RadioGroup
        name="Plan"
        options={[
          { label: "Silver", value: "Silver" },
          { label: "Gold", value: "Gold" },
          { label: "Diamond", value: "Diamond" },
        ]}
        control={setPlan}
        value={plan}
      />
      <p>Plan: {plan}</p>

      <hr />

      <h3>Checkbox Group</h3>
      <p>Choose Addons</p>

      <CheckboxGroup
        name="Addons"
        options={[
          { label: "Laptop", value: "Laptop" },
          { label: "Mobile", value: "Mobile" },
          { label: "PC", value: "PC" },
        ]}
        control={setAddonList}
        value={addonList}
      />
      <p>
        [
        {addonList.map((addon, index) => (
          <span key={addon}>
            {addon}
            {index < addonList.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </p>

      <DynamicFormArray value={itemList} control={setItemList} />
      <p>
        [
        {itemList.map((item, index) => (
          <span key={item}>
            {item}
            {index < itemList.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </p>
    </div>
  );
}

export default App;
