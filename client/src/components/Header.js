import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";




export default function Header() {
	return (
		<Navbar className="p-0 bg-dark">
			<Container className="justify-content-center">

				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Nav className="gap-3" id="nav">

					<NavLink className="text-light text-decoration-none" to="/">Login</NavLink>
					<NavLink className="text-light text-decoration-none" to="/admin">Admin</NavLink>
					<NavLink className="text-light text-decoration-none" to="/company">Bayii</NavLink>

				</Nav>

			</Container>
		</Navbar>
	);
}