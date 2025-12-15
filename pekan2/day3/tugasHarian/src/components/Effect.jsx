import React, { useEffect } from 'react';

function Effect () {
    useEffect(() => {
        console.log("komponen di update");
});
    return (
        <div>
            <p>effect</p>
        </div>
    );

};

export default Effect;