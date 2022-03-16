import React from "react";

const Form = () => {
  const [text, setText] = React.useState(text);

  function handleInputText(value) {
    return setText(value.target.value);
  }

  return (
    <div className="form-group">
      <label htmlFor="firstNameString">First Name</label>
      <form onSubmit={handleInputText}>
        <input type="text" className="form-control" value={text} onChange={(handleInputText) => handleInputText()} />
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
