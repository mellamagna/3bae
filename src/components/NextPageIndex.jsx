import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const NextPageIndex = () => {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const FakeLink = props => {
		return(
			<span>
				<a href={"#" + props.id} onClick={handleShow} style={{textDecoration: "underline"}}>
					{props.id}
				</a>
				&nbsp;&nbsp;
			</span>
		)
	}

	return (
		<Fragment>

			<div className="container pageindex">
				<span><b>1</b>&nbsp;&nbsp;</span>
				<FakeLink id="2"/>
				<FakeLink id="3"/>
				<FakeLink id="4"/>
				<FakeLink id="5"/>
				<FakeLink id="6"/>
				<FakeLink id="7"/>
				<FakeLink id="8"/>
				<FakeLink id="9"/>
				<FakeLink id="10"/>
				<FakeLink id=">"/>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Whoa there!</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>This is a <b>single</b> page application! What were you thinking?</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>

		</Fragment>
	);
};

export default NextPageIndex;