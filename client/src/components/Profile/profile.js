import React, { Component } from 'react';

class Profile extends Component {

    render() {
        return (
            <div className="container-fluid">
                
        
                <div className="container">
      <div className="fb-profile">
        <img align="left" class="fb-image-lg" src="../img/collection.png" alt="Profile header image " />
        <img align="left" class="fb-image-profile thumbnail" src="../img/avatar.jpg" alt="Profile image " />
        <div className="fb-profile-text">
          <h1 className="text-white-50">User Name</h1>
          <p className="text-white-50">Bio Discription</p>
        </div>
      </div>
    </div>
            
    <div className="container">
      <div className="row">
        <div className="col-md-3 ">
          <div className="list-group ">
            <a href="profile.html" className="list-group-item list-group-item-action active">Profile</a>
            <a href="collection.html" className="list-group-item list-group-item-action">Collection</a>
            <a href="boxset.html" className="list-group-item list-group-item-action">Boxsets</a>
            <a href="#" className="list-group-item list-group-item-action">Specials</a>
            <a href="#" className="list-group-item list-group-item-action">News</a>
            <a href="#" className="list-group-item list-group-item-action">Store</a>
            <a href="#" className="list-group-item list-group-item-action">Customer Service</a>
            <a href="#" className="list-group-item list-group-item-action">Settings</a>


          </div>
        </div>




            </div>
        );
    }
}

export default Profile;