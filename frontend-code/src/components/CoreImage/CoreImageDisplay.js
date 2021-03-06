import React from 'react';
import '../../css/CoreImagesDisplay.css';

const CoreImageDisplay = props => {
    console.log(props);
    console.log("here");
    return (
        <div className="container">
         <div className="center row">
                <h3>
                    <span className="animateLine">
                        {props.title}
                    </span>
                </h3> 
                <div className="flexrow">
                    {props.data.map(
                        function (member) {
                            return (
                              <div key={member.id} className="core_img z-depth-2">
                                <div className="img__overlay">
                                        {member.user.first_name} {member.user.last_name}
                                        <br/>
                                        {member.role}
                                </div> 
                                <img src={`http://127.0.0.1:8000${member.user.avatar}`} alt="person"/>
                                </div>  
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoreImageDisplay;