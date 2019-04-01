// import React, { Component } from "react";
// import apiUrl from "../../apiConfig";
// import { getUser } from "../../services/AuthService";
// class UpdateProfile extends Component {
//   state = {
//     formData: {
//       old: null,
//       new: null
//     },
//     err: null
//   };

//   handleLoginRequest = passwords => {
//     let url = `${apiUrl}/change-password`;

//     console.log({ email: getUser().email, passwords });
//     console.log(url);
//     fetch(url, {
//       method: "PATCH",
//       mode: "cors",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ email: getUser().email, passwords })
//     })
//       .then(res => res.json())
//       .then(data => {
//         this.props.changeActivePage("home");
//       })
//       .catch(e => console.log(e));
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.handleLoginRequest(this.state.formData);
//   };

//   handleChange = ({ currentTarget }) => {
//     const formData = { ...this.state.formData };
//     formData[currentTarget.name] = currentTarget.value;
//     this.setState({ formData });
//   };

//   render() {
//     return (
//       <div className="pt-5 mt-5">
//         <h1>Change Password</h1>

//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label>Old Password</label>
//             <input
//               name="old"
//               className="form-control"
//               type="password"
//               onChange={this.handleChange}
//             />
//             <label>new Password </label>
//             <input
//               name="new"
//               type="password"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//             <label>email </label>
//             <input
//               name="email"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//             <label>Name </label>
//             <input
//               name="name"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//             <label>Phone </label>
//             <input
//               name="phone"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//             <label>Address </label>
//             <input
//               name="address"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//             <label>Car </label>
//             <input
//               name="car"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//             <label>Cost </label>
//             <input
//               name="cost"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//             <label>Avalable </label>
//             <input
//               name="avalable"
//               className="form-control"
//               onChange={this.handleChange}
//             />


//           </div>

//           <button type="submit" className="btn btn-primary">
//             submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ChangePasswordForm;
