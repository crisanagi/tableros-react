import React, { useState } from 'react';
//import TableauReport from 'react-tableau'; //'tableau-react-embed';
import TableauReport from 'tableau-react';
//var url = 'https://tableau.efemsa.com/#/views/AssetManagement/General?:iid=1';

const TableroCirWireless = (props) => {

    const [url] = React.useState("https://tableau.efemsa.com/views/Bonafont/Bonafont?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link");
    const [token, setToken] = React.useState(null);
    const [isBusy, setBusy] = React.useState(true);

    React.useEffect(() => {
        fetch("get-trusted-ticket")
            .then(res => res.text())
            .then((data) => {
                console.log(data);
                setToken(data);
                setBusy(false);
            })
            .catch(console.log);
    }, [])

    return (
        <div>
        { isBusy ? 
        ( <div>cargando</div> ) :
        (
            <div>

               <TableauReport
                  url={url}
                  token={token}
                /> 

            </div>
        ) }
        </div>    
    )
}

export default TableroCirWireless;
