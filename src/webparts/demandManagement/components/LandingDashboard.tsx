import * as React from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Icon, Stack, StackItem } from 'office-ui-fabric-react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { CSSProperties  } from "@material-ui/styles";
import * as APPCONSTANTS from './Constants/globalConst'
import styles from "./DemandManagement.module.scss";
import { CompoundButton, IStackTokens } from '@fluentui/react';


const handlePendingRequests = () =>{
    alert("Handle Pending Request");
}

export const LandingDashboard = (props) => {
    const handleNewRequest = () => {
        props.handleNewRequest();
    }
    return(
        <>
            <div className={`ms-Grid`}>
                <div className="ms-Grid-row">
                    <div style={{ boxShadow: `0px 0px 5px 0px`, margin: `0px 10px 5px 20px`, width: `97%`, borderRadius: `5px`, borderLeft: `10px solid blue`, borderTop: `1px solid`, borderRight: `1px solid`, borderBottom: `1px solid`, height: `5vh` }}>
                        <span style={{ paddingTop: `6px`, textAlign: `center`, width: `100px`, float: `left`, height: `100%`, margin: `0px 10px 0px -1px`, backgroundColor: `${APPCONSTANTS.BOBThemePrimaryColor}`, color: `#fff`, paddingLeft: `5px` }}>Notifications</span>
                        <div style={{ display: `flex`, flexDirection: `row`, alignItems: `center`, marginTop: `6px`, marginLeft: `10px` }}>
                            <div style={{ marginRight: `10px` }}>
                                {
                                    props.assignedToItems === 0 ? `None.`
                                        :
                                        <span>You have <a href='#' onClick={handlePendingRequests} >{`${props.assignedToItems} items`}</a>assigned.</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="ms-Grid-row">
                    <div style={{ display: 'block'}} className="ms-Grid-col col-sm-12 col-md-6 col-lg-6 col-xl-6"> 
                        <div >
                            <div >
                                <div >
                                    <Icon iconName={`AddToHoppingList`}></Icon>
                                </div>
                                <div style={{ fontSize: `20px`}}>                                    
                                    <CompoundButton onClick={handleNewRequest} primary secondaryText="Please click this button to create a new Request" >
                                    Raise a New Request
                                    </CompoundButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}