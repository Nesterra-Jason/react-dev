import React, { Component } from 'react';

import * as pbi from 'powerbi-client';

class Secure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reportId: '',
            embedToken: '',
            embedUrl: '',
            isLoaded: false,
        }
        this.powerbiContainerRef = React.createRef()
    }

    componentDidMount() {
        fetch('https://pbieembedtokenfunctionapp.azurewebsites.net/api/HttpTrigger1?code=QA6BH1NBOVAeAswn5AZEofwrOlC3rmjGQM8vMoyyV3S8Se3mWxX6aQ==')
            .then(response => response.text())
            .then(response => response.slice(9, -2))
            .then(response => JSON.parse(JSON.stringify(response)))
            .then(response => {
                const { EmbedToken, EmbedUrl, ReportId } = JSON.parse(response)
                let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
                const permissions = pbi.models.Permissions.All
                var config = {
                    type: 'report',
                    tokenType: pbi.models.TokenType.Embed,
                    accessToken: EmbedToken,
                    embedUrl: EmbedUrl,
                    id: ReportId,
                    permissions: permissions,
                    settings: {
                        filterPaneEnabled: true,
                        navContentPaneEnabled: true
                    }
                };
                this.setState({
                    isLoaded: true,
                    reportId: ReportId,
                    embedToken: EmbedToken,
                    embedUrl: EmbedUrl,
                }, () => {
                    console.log(powerbi)
                    // Embed the report and display it within the div container.
                    var report = powerbi.embed(this.powerbiContainerRef.current, config);

                    // Report.off removes a given event handler if it exists.
                    report.off("loaded");

                    // Report.on will add an event handler which prints to Log window.
                    report.on("loaded", function () {
                        console.log("Loaded");
                    });

                    // Report.off removes a given event handler if it exists.
                    report.off("rendered");

                    // Report.on will add an event handler which prints to Log window.
                    report.on("rendered", function () {
                        console.log("Rendered");
                    });

                    report.on("error", function (event) {
                        console.log(event.detail);

                        report.off("error");
                    });

                })
            })
    }

    render() {

        const { isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Authenticating...</div>;
        }

        return (
            <div
                className="powerbi-client-container"
                ref={this.powerbiContainerRef}
            >

            </div>
        )
    }
}


export default Secure