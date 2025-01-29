import { useState } from 'react';
import TableComponent from './TableComponent';

function MyComponent(props) {
  const [prevstudentCount, setStudentCount] = useState(100);
  function handelClick() {
    setStudentCount((x) => x + 1);
  }
  function handelDecrementClick() {
    setStudentCount((x) => x - 1);
  }
  return (
    <div>
      <h1>Wlecome to {props.desi} project </h1>
      <p>This is my project component</p>
      <p>
        {props.desi} Count = {prevstudentCount}
      </p>
      <TableComponent name={props.desi} />
      <button className="add" onClick={handelClick}>
        {props.desi} Count
      </button>
      <button className="sub" onClick={handelDecrementClick}>
        Decrement {props.desi} Count
      </button>
    </div>
  );
}

export default MyComponent;
