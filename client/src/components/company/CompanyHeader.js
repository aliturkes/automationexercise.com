import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/actions'
import { BsFillPersonFill } from "react-icons/bs";
import Logo from "../Logo";



export default function CompanyHeader() {

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const company = useSelector(state => state.authReducer?.user?.user?.company)

	return (
		<Navbar>
			<Container className="justify-content-between align-items-end mt-3">

				<Navbar.Brand><Logo /></Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

					<Nav className="align-items-center gap-2" id="nav">

						<div>{company}</div>

						<Dropdown className="d-inline">
							<Dropdown.Toggle size="sm" variant="link" className="text-dark p-0">
								<BsFillPersonFill className="fs-4" />
							</Dropdown.Toggle>

							<Dropdown.Menu align="end">
								<Dropdown.Item href="#" disabled>Şifre Değiştir</Dropdown.Item>
								{/* <Dropdown.Item href="#" disabled>Hesabı Sil</Dropdown.Item> */}
								<Dropdown.Divider />
								<Dropdown.Item as="button" onClick={() => { navigate("/"); dispatch(logout()); }}>Çıkış Yap</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>

					</Nav>

				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}