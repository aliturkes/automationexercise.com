import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";


export default function Header() {

	const navigate = useNavigate()

	return (
		<Navbar >
			<Container className="justify-content-between align-items-end">

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			
					<Nav className="align-items-center gap-2" id="nav">

						<NavLink className="nav-link text-body" to="/">Login</NavLink>
						<NavLink className="nav-link text-body" to="/admin">Admin</NavLink>
						<NavLink className="nav-link text-body" to="/dealer">Bayii</NavLink>

					</Nav>

			</Container>
		</Navbar>
	);
}