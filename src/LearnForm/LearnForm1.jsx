import { useState } from "react";

const LearnForm1 = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [age, setAge] = useState(0);
  let [address, setAddress] = useState("");
  let [gender, setGender] = useState("male");
  let [country, setCountry] = useState("Nepal");
  let [isMarried, setIsMarried] = useState(false);
  let [description, setDescription] = useState("");

  let countries = [
    { label: "Nepal", value: "nepal" },
    { label: "China", value: "china" },
    { label: "Usa", value: "usa" },
    { label: "Europe", value: "europe" },
  ];

  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          let data = {
            fullName: fullName,
            email: email,
            password: password,
            age: age,
            address: address,
            gender: gender,
            country: country,
            isMarried: isMarried,
            description: description,
          };
          console.log(data);
        }}
      >
        <div>
          <label htmlFor="fullName">FullName : </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="address">Address : </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>Gender :</label>
          {genders.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}> {item.label} </label>
                <input
                  type="radio"
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </span>
            );
          })}
        </div>
        <br />
        <div>
          <label>Country :</label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {countries.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="isMarried">isMarried :</label>
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LearnForm1;
