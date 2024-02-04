import React from 'react';
import './index.scss';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { addContest } from '../../redux/slices/contestSlice';

import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import app from '../../firebase';

const NewCard = () => {
    const [show, setShow] = React.useState(false);

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const titleHandler = (e) => {
        if (e.target.value.length <= 15) setTitle(e.target.value);
    };

    const descriptionHandler = (e) => {
        if (e.target.value.length <= 50) setDescription(e.target.value);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const disptach = useDispatch();

    const db = getFirestore(app);

    const sender = async () => {
        if (!title || !description) return;
        try {
            await addDoc(collection(db, 'contests'), {
                title: title,
                description: description,
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        disptach(addContest({ title: title, description: description }));
        // Осуществить создание проекта на базе данных
        setTitle('');
        setDescription('');
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Создание соревнования</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlInput1'>
                            <Form.Label>Название соревнования</Form.Label>
                            <Form.Control
                                type='text'
                                autoComplete='off'
                                placeholder='Дивизион 1'
                                value={title}
                                onChange={titleHandler}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>Описание соревнования</Form.Label>
                            <Form.Control
                                value={description}
                                onChange={descriptionHandler}
                                as='textarea'
                                rows={3}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button variant='primary' onClick={sender}>
                        Создать соревнование
                    </Button>
                </Modal.Footer>
            </Modal>
            <div onClick={handleShow} className='NewCard'>
                <div className='content'>
                    <div className='first' />
                    <div className='second' />
                </div>
            </div>
        </>
    );
};

export default NewCard;
