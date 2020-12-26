import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	useEffect(() => {}, []);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form
					onSubmit={e => {
						actions.postContact(e);
						history.push("/");
					}}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name="full_name"
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={evento => actions.onChangeContact(evento)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							name="email"
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={evento => actions.onChangeContact(evento)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							name="phone"
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={evento => actions.onChangeContact(evento)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							name="address"
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={evento => actions.onChangeContact(evento)}
						/>
					</div>

					<button type="submit" className="btn btn-primary form-control mb-3">
						Save New Card
					</button>
					<button
						className="btn btn-primary form-control mb-3"
						onClick={e => {
							actions.putContact(e, props.match.params.contact_id);
							history.push("/");
						}}>
						Save Changes
					</button>

					<Link className="btn btn-dark form-control mb-3" to="/">
						Back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			contact_id: PropTypes.number.isRequired
		})
	}),
	params: PropTypes.any
};
