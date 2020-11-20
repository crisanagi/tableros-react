import React, { useState } from 'react';
import TableauReport from 'tableau-react';

const TableauEmbebed = () => {
    
    //const [url]  React.useState("https://tableau.efemsa.com/views/CIR_Wireless_v2/General?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link");
    //const [url] = React.useState("https://tableau.efemsa.com/views/Bonafont/Bonafont?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link")
    const [url] = React.useState("https://tableau.efemsa.com/views/CIR_Wireless_v2/General?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link")
    const [token, setToken] = React.useState(null);
    const [isBusy, setBusy] = React.useState(true);

    //const url = "https://tableau.efemsa.com/views/cir_wireless_action_lock/General?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    //const url2 = "https://tableau.efemsa.com/views/Bonafont/Bonafont?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const { height, width } = getWindowDimensions();

    const options = {
        height: 1328,
        width: 1280,
        toolbar: "no"
    }


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
        <h2>Holis</h2>
        <div>
            contenido de botones {height} , {width}
        </div>
        { isBusy ? 
        ( <div>cargando</div> ) :
        (
            <div>
               <TableauReport
                  url={url}
                  token={token}
                  options={options}
                /> 
            </div>
        ) }
        </div>
    )
}

export default TableauEmbebed
