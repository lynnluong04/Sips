//src/components/AllBusinesses/index.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { Link } from 'react-router-dom';

const AllBusinesses = () => {

    const dispatch = useDispatch();
    const businesses = useSelector(state => {
        return Object.values(state.business);
    });

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, [dispatch])

    if (!businesses) {
        return null;
    }

    return (

        <>
            <h2> Find the best drinks in New York, NY </h2>
            {businesses && (businesses).map((business) => {
                return (
                    <Link key={business.name} to={`/businesses/${business.id}`}>
                        <div>
                            <div>{business.name}</div>
                            <div>{business.phone}</div>
                            <div>{business.address} New York, NY {business.zipcode} </div>
                            <div>Avg Rating goes here soon</div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default AllBusinesses;
