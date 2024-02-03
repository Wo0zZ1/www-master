import React from 'react';
import './index.scss';
import Test from '../test/index';
import NewCard from '../newCard/index';
import { useSelector } from 'react-redux';

const Tests = () => {
    const tests = useSelector((state) => state.contest.contests);
    return (
        <div className='Tests'>
            {tests.map((test, i) => {
                return (
                    <Test
                        key={i}
                        title={test.title}
                        description={test.description}
                    />
                );
            })}
            <NewCard />
        </div>
    );
};

export default Tests;
