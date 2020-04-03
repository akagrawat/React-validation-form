import React from 'react';
import MainRouter from '../../router/router';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Wrapper(props) {
    return (
        <Router>
            <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
                <div className="wrapper wrapper--w960">
                    <div className="p-t-30 custom-button">
                        <Link to="/registration">
                            <button className="btn btn-resg btn--radius btn--green" value="submit" type="submit">Registration</button>
                        </Link>
                        <Link to="/calculator">
                            <button className="btn btn--radius btn--green" value="submit" type="submit">Calculator</button>
                        </Link>
                    </div>
                    <div className="card card-2">
                        <div className="card-heading"></div>
                        <MainRouter />
                    </div>
                </div>
            </div>
        </Router>

    )

}

export default Wrapper;