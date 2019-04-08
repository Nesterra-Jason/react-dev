import React, { Component } from 'react';
import PowerbiEmbedded from 'react-powerbi';
import fetchJsonp from 'fetch-jsonp';

// var reportid = '1edc8360-a434-46af-ba9b-8293c40d4a5f';
// var embedtoken = 'H4sIAAAAAAAEAB2Wta7FCpJF_-WlbslMLXVg9jEzZWZm9mj-fW5PUtFWBUsF63_-sdJ3mNPin3__w_pf77lXOXuoUnyEq1s2kSOcS6r9MdvB01BSRTw_wBIrL4WKrdi-y31Fxbb27SoR7tsc5weeHq89TA772jdTJsAwXclaoSG73EFH00qOE3v7ZyyTEAktNhTmTbw_z-I2iQl9J9ZqSZO_NgLg5HXp6DsKjEzXhEdB0us_JsEnvskHxlNmZ4wm93GZpppsaXWE2G-1UNG8-obC1j1yxNhE3OuohBERU-tEMssl96kSunwlU3_wFAvpKXPsPQicaWeG1OiX8APBvo7xTWSyRkBS-7IQbEuF5AISlMtE7EH8W9jlVdlJcKHAO5rfWHiM_gLj8p1uJJ8xI-S_wa50Wu3SsrwGeqcMRSswT-NSivrIppTNaKhpFt2i7f6pTPuCQenE0a1S7wxeTTiFy2EdM0GfbejNNV-vMn0cNAGJvyMws1owfqhks7N1tLODZJ2fbOHoSnvbfJAwxyF_PXmbSzpGJl3GkUw7yHSYisho3WR097liG11LIxzD4DtowmHsQb7Hh9wSbgGzUluctMVOMvYG7gklq3f5yF4WWkZoT1cqsNe-2oGewRbhtT5_BxPwytFoJAiCPnVvde9n91h9X82IjmRvrMd0xZjgGfOJjr54JO6s5gfN-Y9qF1SwdyfikPb2wxhrVCEXmJUivKBSabVzhCNC8zFKcXo5abeVtSf7ZzWd0LqOlLxdz2xXj8H9c8H3AM5zTn1jnp0sf-9M2mMSnTPMmbH3yLAAbSi7NFTg0_-EuxqP67Q6rqwxlDVmau7LD3Cd0EGx0bQqgniRZXj6-PuAXA42_ARz8O4ShijB4mrA4JxzMkvXxO3aTwxFwRk2msLsJ1qv_m-LjAZokM3k8U9JXAYPPHVRIAZsfVNfvhfvzIIzxFiv2kyfY7vwJxbn9jOMdcK9loZFI_JT6Rx1Jy5Z62yoiYkHvop5vebEO8gSr7WXIKk4NBTVSHs6sbn-YfdROA-ew-wnIPDotGiJP_0Gdldm7Dr2iyHWoXSkzYyfBiq1VpNOMqcNhHWEe4asgUhylBTP6SXPLuHEcXnqS_kdK6tdzhC3Djd5tqAjK5TuSK2YRJUjUiKakael_RuJg3TTltkCwLRZRV08b2ZS3oSZuG_QlKOYsz4BmFLLG1cqLcAn4FDkR9svKuBCBdouyq1lBXL8h3q4y8f3EkLNgGIMaJ7eCdQVgEVk9L61nLh3cE8BkknjPSQNTfN8LceyCy8zD9tBh0Qjt_ZpqXIH1tvuo19kg_ixnVdBCemnovA4yETjPKM8oXi-AMQWWF6Oa4nIYNINxTjplJ3h443PcIEmn092OzH-noEnZQgixKWp7xmI50Rjy8Dt6LT8mjq0EKAWiy_Bi8COLNH2LT6mz2C3AA20WjnzBIhkacIKlQJAmyj7MQUslF_rs9lwSHOJgpZn4ibUStKJufByPR8cFBbGEDtmpv6sf-zBDUvYaOA5B4CBL94xQJk5N1t2YqDvnrdvWAyW1PMDLTj8MRDkYK8dH3uvWrUc5Q0OwZVJW1CZxtCMOEYhOAzQyRopiUNV69BwbjcZrDH1C3Wu2eIOaai3bbnDYDSXc0NSA3yncm2eE6gs9fnxnLNhIw17abNBX_DSekMYfbA-Nout5BtlPUBiNgGSY9YH17-VggI4F14beCMAD-YRKgc03AomaP3cxfq5dXHLshmd2V7Ay-_JBfbjx4VRGymhCv4h0U32EJr014sgpVZMQ5DaD1_2JjMZEX8sK0bHK6FHoZ8elc9G19rC8wgaKhbEn0FGRPYkrw2_MrGUU0KSgDJteAmKVUeGeUU-C7bWyoFsrdCd9-3rFrRphxAbk3zu6olMhXUupdempRGcJqcJmOLH904XyEyAI1LXiTmxY0Jx3krP1wUAdhXyCGc1bOFl_TbvV1OYRkRaBJ4rfcMXKjwplB8tC-0-KrYQj_DbZN7V8xdLDolZiXZpeYQItST7GLPDaM3Zkbc0x8E8wZhicUncPGZzywixGjwJ8tXv35Z9ok6el9_aUHiT4ZknW8-Nx4icg-TC6hz8LBFt9YHCYV0ZcbAy-cMlhczp6dkT0aqpZpQWV3T6wukoSqn0FBijoBABqBU3DwNje4gN00_47ATKvpYX_13XqewcqL-PCP8d_YrdqkRFasz2sJ8q8DFFF5kWxYGlpVMRObv4qR1JAWMG7nxWLOgTeijM1frPv_7htnc5ZrV8_3RkGsuj1QDg2J4EWNg0lZLRYXHow_ZVeJRe02LN6WzoDcGXxo4o3cTzzsijYuiqTut-lJvLCeB79MaES_5E4akqUvz7pgb2nf1UWduUL6RUukXwq9mX9lup6TI6ke-_rqwdtwQQPnM0g7rbqxQ93iiHXO0Y-P58BCCKWSyQn7Ps8So2EZEWbbhxCq-p2BR_a9d5LQEBs4USgPUw5EN7z4JVo9Tk39Rgup6WA9licOFfBXX_bxZmdDuBGv4-HmwU_3yiEZnMl9dv-uvp2jGLy9nQAxmVbandjYXxksUKpdaxO_ZeLieHz2MTbtRV_A6QlAsiyRSrFBj8uvm7cW93XxIwgcx__vNfzO_SlNsv-KMMD9YSiEIDx53Ey1RZZfhB1P-fctt6So9zK_9iYm_9qeFSgW0s8gUv9J2JWShZd9NueuHXLsE5TO7AoWaCUPLsLzHbLLGKiEnCFdydK28aKvKKOkEDkumeF9Di4iP_Ip1Vmp-EV-mCmeI-Fok9MMZCaegWSxUNy-NpWH_asaY4RWNFm0BkubCsIt7MrvatH7Jbu8H5t3pcQvSd8uObxPW-tzv9oq3bxzEg0aBVQgInyy0kbg1kkU2OEQvu9MiHDx4maZXXZa9qw5ivamxXXaZhgJInVsQ817v7sqph9YngZmaNkV1ftgRzGu3fdAdYnnHYluhR0_4Jmh6vqXV5mrwbzTJXKPVBrBQ5P2bRvPak2Y782KxmKo3hbF3LBeW_mP_3_wCcdSW4ggsAAA==';
// var embedurl = 'https://app.powerbi.com/reportEmbed?reportId=1edc8360-a434-46af-ba9b-8293c40d4a5f&groupId=f3cd54e8-33c1-4aef-83e2-059b904dedab';
// var pageid = '1';
// class App extends Component {
//     render () {
//       return (
//         <div className='App'>
//           <PowerbiEmbedded
//             id={reportid}
//             embedUrl={embedurl}
//             accessToken={embedtoken}
//             filterPaneEnabled={false}
//             navContentPaneEnabled={false}
//             pageName={pageid}
//             embedType="report"
//             width='600px'
//             height='900px'
//           />
//         </div>
//       )
//     }
//   }

var getEmbedToken = "https://pbieembedtokenfunctionapp.azurewebsites.net/api/HttpTrigger1?code=QA6BH1NBOVAeAswn5AZEofwrOlC3rmjGQM8vMoyyV3S8Se3mWxX6aQ==";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reportId: 'what the fuck',
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
            .then(response => console.log(response))
            .then(response => {
                this.setState({
                    isLoaded: true,
                    reportId: response['ReportId'],
                    embedToken: response['EmbedToken'],
                    embedUrl: response['EmbedUrl'],
                });
            })
            //.then(console.log('parsed json', this.state))
      }

      render() {
        const { reportId, embedToken, embedUrl, isLoaded} = this.state;


        if (!isLoaded) {
            return <div>Authenticating...</div>;
        }

        else {

            console.log(this.state);

            return (
                <div className='App'>
                    <Report
                    id={this.state.embedConfig.id}
                    embedUrl={this.state.embedConfig.embedUrl}
                    accessToken={this.state.embedConfig.accessToken}
                    filterPaneEnabled={true}
                    navContentPaneEnabled={false}
                    onEmbedded={this.onEmbedded}
                    />
                </div>

            );
        }

    }
}

export default App