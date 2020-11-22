import React from 'react'

export const Header = () => {
    const Style = {
        display: 'inline-block',
        color: 'black',
        background: '#9C88FF',
        'margin-left': '40px',
        'box-sizing':'border-box',
        'padding':'8px',
        border: '2px solid #9C88FF',
        'border-radius': '4px'

    };


    return (
        <div>
            <h1 style={Style}>
                Expense Tracker
        </h1>
        </div>
    )
}

export default Header;