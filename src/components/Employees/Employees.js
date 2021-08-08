import { React } from "react";

const personalData = [
  {
    id: 1,
    fname: "Krzysztof",
    lname: "A",
    age: 25,
    salary: `5000$`,
    position: "PM",
  },
  {
    id: 2,
    fname: "Krzysztof",
    lname: "B",
    age: 30,
    salary: `10000$`,
    position: "Q&A",
  },
  {
    id: 3,
    fname: "Krzysztof",
    lname: "C",
    age: 35,
    salary: `15000$`,
    position: "Developer",
  },
];

const styles = {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  justifyItems: "center",
  tableHead: {
    fontWeight: "bold",
    margin: "1em 0",
    padding: "1em",
    border: "1px solid #000",
  },
  tableElement: {
    padding: "1em",
    cursor: "pointer",
  },
  tableElementHidden: {
    padding: "1em",
    visibility: "hidden"
  },
};

export default function Employees() {
  const showPersonalData = (id) => {
    const hiddenData = document.querySelectorAll(".hidden");
    hiddenData.forEach((el) => {
      let visible = el.offsetWidth > 0 && el.offsetHeight > 0;

      if (Number(el.getAttribute("id")) === id && visible) {
        el.style.visibility = "visible";
      } else {
        el.style.visibility = "hidden";
      }
    });
  };

  return (
    <div style={styles}>
      <div style={styles.left}>
        <div style={styles.tableHead}>Imię i nazwisko</div>
        {personalData.map((data) => {
          const { id, fname, lname } = data;
          return (
            <div
              key={`id-${id}`}
              style={styles.tableElement}
              onClick={() => showPersonalData(data.id)}
            >
              {fname} {lname}
            </div>
          );
        })}
      </div>
      <div style={styles.right}>
        <div style={styles.tableHead}>wiek / pensja / stanowisko</div>
        {personalData.map((data) => {
          const { id, age, salary, position } = data;
          return (
            <div
              key={`id-${id}`}
              id={id}
              style={styles.tableElementHidden}
              className="hidden"
            >
              {age} / {salary} / {position}
            </div>
          );
        })}
      </div>
    </div>
  );
}
