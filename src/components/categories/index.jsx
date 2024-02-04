import React from 'react';
import './index.scss';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from '../../redux/slices/categoriesSlice';
import Table from 'react-bootstrap/Table';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../firebase';

const Categories = () => {
    const disptach = useDispatch();
    const db = getFirestore(app);

    let categories = useSelector((state) => state.categories.categories);

    let compareByString = (a, b) => {
        return a.category > b.category ? 1 : -1;
    };

    let sortedCategories = [...categories].sort(compareByString);

    const handleChange = (e) => {
        try {
            const file = e.target.files[0];
            const reader = new FileReader();
            let ans = [];
            reader.onload = (e) => {
                const contents = e.target.result;
                ans = contents.split('\n').map((stroke) => {
                    return [...stroke.split(':')].map((el) => {
                        return el.replace('\r', '');
                    });
                });
                ans.map(async (item) => {
                    try {
                        await addDoc(collection(db, 'categories'), {
                            category: item[0],
                            question: item[1],
                            answer: item[2],
                            rating: parseInt(item[3]),
                        });
                    } catch (e) {
                        console.error('Error adding document: ', e);
                    }
                });
                disptach(
                    addCategories(
                        ans.map((item) => {
                            return {
                                category: item[0],
                                question: item[1],
                                answer: item[2],
                                rating: parseInt(item[3]),
                            };
                        }),
                    ),
                );
            };
            reader.readAsText(file);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='Categories'>
            <Form.Group controlId='formFile' className='mb-3'>
                <Form.Label>Загрузить вопросы</Form.Label>
                <Form.Control
                    accept='.txt'
                    onChange={handleChange}
                    type='file'
                />
            </Form.Group>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Категория</th>
                        <th>Вопрос</th>
                        <th>Ответ</th>
                        <th>Рейтинг</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCategories.map((category, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{category.category}</td>
                                <td>{category.question}</td>
                                <td>{category.answer}</td>
                                <td>{category.rating}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default Categories;
