import React from 'react';

const Spinner = (props) => ({

    render: function() {
           return (
                <div className="loader">
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            );
    }
})

export default Spinner;