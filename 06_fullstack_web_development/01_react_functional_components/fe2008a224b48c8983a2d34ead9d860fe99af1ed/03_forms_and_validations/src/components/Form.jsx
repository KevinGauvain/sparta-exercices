import React from "react";

const Form = () => {
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState("");

  function handleInputText(data) {
    setText(data.target.value);
    controlInput(data.target.value) ? setError("no spaces allowed") : null;
  }

  function controlInput(data) {
    return /\s/g.test(data);
    // return data.target.value.includes(" ") ? "space not allowed" : null;
    // if (/\s/g.test(data)) {
    //   return setError("space not allowed");
    // } else {
    //   return setError("OK");
    // }
  }

  return (
    <div className="form-group">
      <label htmlFor="firstNameString">First Name</label>
      <form onSubmit={(event) => handleInputText(event)}>
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(event) => handleInputText(event)}
          placeholder="a space"
        />
        <p>{error}</p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

/* <input type="checkbox" onChange={(e) => this.setState("status", e.target.value)} />; */

// {/* {/* // return (
// //   <form>
// //     <div className="form-group">
// //       <label htmlFor="firstNameString">First Name</label>
// //       <input */}
// {/* //         type="string"
// //         className="form-control"
// //         id="firstNameString"
// //         aria-describedby="entrieUser"
// // //         onChange={input}
// // //       ></input> */}
// // //       {/* No space allowed */}
// // {/* //     </div> */}
// // //     <button type="submit" className="btn btn-primary">
// // //       Submit
// // //     </button>
// // //   </form>
// // );
// // }; */}
