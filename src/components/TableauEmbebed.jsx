//https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_concepts_filtering.htm
//https://help.tableau.com/current/pro/desktop/en-us/embed_structure.htm


import React, { useState } from 'react';
import TableauReport from 'tableau-react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const TableauEmbebed = () => {

    const { Search } = Input;
    
    const [url] =   React.useState("https://tableau.efemsa.com/views/Peafiel/PromedioAperturasDaporPdV?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link");
    //-const [url] =   React.useState("https://tableau.efemsa.com/views/Semforo_Peafiel/SemforoTransmisin?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link");
    //const [url] = React.useState("https://tableau.efemsa.com/views/Bonafont/Bonafont?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link")
    //const [url] = React.useState("https://tableau.efemsa.com/views/CIR_Wireless_v2/General?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link")
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
    
    
    
    var filters = {
        outletname: "Ab. San Let,Kevin,casa Díaz,Ab. neydi" 
    }

    const options = {
        height: 1328,
        width: 1280,
        toolbar: "no"
    }

    React.useEffect(() => {
        fetch("https://us-central1-imberalink-238816.cloudfunctions.net/get-trusted-ticket-cors")
            .then(res => res.text())
            .then((data) => {
                console.log(data);
                setToken(data);
                setBusy(false);
            })
            .catch(console.log);
    }, [])

    const onSearch = value => { 
        console.log("onSearch" + value)  
        filters = {
            mac: value
        }
    }

    /*
    <div>
            <Search placeholder="MAC"  
                    enterButton="Filtrar MAC"
                    size="large"
                    allowClear 
                    onSearch={onSearch}/>
        </div> 
    */
 

    return (
        <div>
        <h2>Tablero con filtros</h2>
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
                  filters={filters}
                  style={{width: 200 }}
                /> 
            </div>
        ) }
        </div>
    )
}

export default TableauEmbebed
