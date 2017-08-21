import * as React from "react"
import * as style from './FrontPage.css'
import IconButton from 'material-ui/IconButton'
import { Redirect } from 'react-router-dom'
import { NavigationArrowDownward } from 'material-ui/svg-icons'

interface FrontPageProps {
    welcomeMessages: string[]
    arrowMessage: string
}

interface FrontPageState {
    showArrowMessage: boolean
    arrowClicked: boolean
}

export class FrontPage extends React.Component<FrontPageProps, FrontPageState> {
    constructor(props: FrontPageProps) {
        super(props);
        this.state = {
            showArrowMessage: false,
            arrowClicked: false 
        }
    }

    render() {
        if (this.state.arrowClicked) {
            return (
                <Redirect to="/blog"/>
            )
        }
        return (
            <div style={{ position: "relative" }}>
                <img className={style.FrontPageImg} src="http://7xlt42.com1.z0.glb.clouddn.com/IMG_1227_sy.jpg-60percent" alt="Norway" width="1000" height="300" />
                <div className={style.FrontPageTitle}>
                    {
                        this.props.welcomeMessages.map((message, index) => {
                            return (
                                <p key={index} style={{ textAlign: "center" }}>{ message }</p>
                            )
                        })
                    }

                    <p style={{ textAlign: "center" }}>
                        <IconButton
                            iconStyle={{
                                width: 60,
                                height: 60,
                            }}
                            style={{
                                width: 120,
                                height: 120,
                                padding: 30,
                                textShadow: "1px 1px black"
                            }}
                            onClick={() => this.setState({ showArrowMessage: this.state.showArrowMessage, arrowClicked: true })}
                                >
                                <NavigationArrowDownward
                                    color={this.state.showArrowMessage ? "black" : "white"}
                                    onMouseOver={() => this.setState({ showArrowMessage: true, arrowClicked: this.state.arrowClicked })}
                                    onMouseLeave={() => this.setState({ showArrowMessage: false, arrowClicked: this.state.arrowClicked })}
                                />
                        </IconButton>
                    </p>
                </div>
            </div>
        )
    }
}