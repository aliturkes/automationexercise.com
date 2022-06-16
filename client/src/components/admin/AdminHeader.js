import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";


export default function AdminHeader() {

	const navigate = useNavigate()

	return (
		<Navbar expand="md">
			<Container className="justify-content-between align-items-end">

				<Navbar.Brand href="/">
					{/* <img src="/img/logo.png" alt="logo" height="60"></img> */}
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

					<Nav className="align-items-center gap-2" id="nav">


						<NavLink className="nav-link text-body" to="/admin/">Cihaz Listesi</NavLink>
						<NavLink className="nav-link text-body" to="/admin/dealers">Bayi Listesi</NavLink>

						<Dropdown className="d-inline">
							<Dropdown.Toggle size="sm" variant="link" className="text-dark p-0">
								<svg width="24" height="24"><use xlinkHref="/img/icons.svg#person-fill" /></svg>
							</Dropdown.Toggle>

							<Dropdown.Menu align="end">
								<Dropdown.Item href="#">Change Password</Dropdown.Item>
								<Dropdown.Item href="#">Delete Profile</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item as="button" onClick={() => { navigate("/") }}>Sign Out</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>

					</Nav>

				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}