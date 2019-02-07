import React, { Component } from 'react';
import './UserWelcome.module.css';
import Api from '../../services/api';

class UserWelcome extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-4">
                    <h2>TESTING</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-">
                        <h2>Based on your survey answers, we recommend the following components:</h2>
                    </div>

                </div>

            </div>


        );
    }
}

export default UserWelcome;
