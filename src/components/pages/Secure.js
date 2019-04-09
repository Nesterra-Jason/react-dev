import React, { Component } from 'react';
import Report from 'react-powerbi';


var getEmbedToken = "https://pbieembedtokenfunctionapp.azurewebsites.net/api/HttpTrigger1?code=QA6BH1NBOVAeAswn5AZEofwrOlC3rmjGQM8vMoyyV3S8Se3mWxX6aQ==";

class Secure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reportId: '',
            embedToken: '',
            embedUrl: '',
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://pbieembedtokenfunctionapp.azurewebsites.net/api/HttpTrigger1?code=QA6BH1NBOVAeAswn5AZEofwrOlC3rmjGQM8vMoyyV3S8Se3mWxX6aQ==')
            .then(response => response.text())
            .then(response => response.slice(9, -2))
            .then(response => JSON.parse(JSON.stringify(response)))
            .then(response => {
                const { EmbedToken, EmbedUrl, ReportId } = JSON.parse(response)

                this.setState({
                    isLoaded: true,
                    reportId: ReportId,
                    embedToken: EmbedToken,
                    embedUrl: EmbedUrl,
                })
            })
    }

    render() {

        const { reportId, embedToken, embedUrl, isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Authenticating...</div>;
        }

        console.log('reportId: ', reportId)
        console.log('embedToken: ', embedToken)
        console.log('embedUrl: ', embedUrl)

        return (
            <div>
                <Report
                    id={reportId}
                    embedUrl={embedUrl}
                    accessToken={embedToken}
                    filterPaneEnabled={true}
                    navContentPaneEnabled={false}
                    onEmbedded={this.onEmbedded}
                />
            </div>
        )
    }
}


export default Secure

//   <Report
//                 id={reportId}
//                 embedUrl={embedUrl}
//                 accessToken={embedToken}
//                 filterPaneEnabled={true}
//                 navContentPaneEnabled={false}
//             onEmbedded={this.onEmbedded}
//             />