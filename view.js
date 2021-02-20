                   <Tab label="Devices" key="Devices" value="Devices" >
                        { devices.supported.length < 1 &&
                            <div style={{ textAlign: "center" }}>
                                <h1>No Devices Found</h1>
                                <p style={{ width:"75%", margin: "auto" }}>Allow2Automate will auto-discover Wemo devices on your network and list them here when found.</p>
                            </div>
                        }
                        { devices.supported.length > 0 &&
                        <Table>
                            <TableBody
                                displayRowCheckbox={false}
                                showRowHover={true}
                                stripedRows={true}>
                                { devices.supported.map(function (device) {
                                        let token = deviceTokens[device.device.device.modelName];
                                        let imageName = deviceImages[device.device.device.modelName];
                                        let paired = this.props.pairings[device.device.UDN];
                                        let child = paired && paired.ChildId && this.props.children[paired.ChildId];
                                        let detail = child ? (
                                            <b>{child.name}</b>
                                        ) : <b>Paired</b>;
                                        let url = child && allow2AvatarURL(null, child);
                                        return (
                                            <TableRow
                                                key={device.device.UDN}
                                                selectable={false}>
                                                <TableRowColumn>
                                                    { imageName &&
                                                    <img width="40" height="40"
                                                         src={ 'assets/img/' + imageName + '.png' }/>
                                                    }
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    { token &&
                                                    <span>{ device.device.device.friendlyName }</span>
                                                    }
                                                    { !token &&
                                                    <span><i
                                                        style={{ color: '#555555' }}>{ device.device.device.friendlyName }</i></span>
                                                    }
                                                </TableRowColumn>
                                                <TableRowColumn style={{textAlign: 'center'}}>
                                                    <Checkbox
                                                        label=''
                                                        isChecked={device.state}
                                                        isDisabled={!token || device.active ? true : false}
                                                        handleCheckboxChange={this.toggleCheckbox.bind(this, device)}
                                                        />
                                                </TableRowColumn>
                                                <TableRowColumn style={{textAlign: 'right'}}>
                                                    { child &&
                                                    <Avatar src={url}/>
                                                    }
                                                </TableRowColumn>
                                                <TableRowColumn style={{textAlign: 'left'}}>
                                                    { paired && detail }
                                                    { !paired &&
                                                    <FlatButton label="Assign"
                                                                onClick={this.assign.bind(this, device.device, token)}/>
                                                    }
                                                </TableRowColumn>
                                            </TableRow>
                                        );
                                    }.bind(this)
                                )}
                            </TableBody>
                        </Table>
                        }
                    </Tab>
                    { devices.notSupported.length > 0 &&
                    <Tab label="Unsupported" key="Unsupported" value="Unsupported" >
                        <div>
                            <h2>Unsupported Devices</h2>
                            If you would like any of these devices supported, please contact us at support@allow2.com.
                            <div>
                                <Table>
                                    <TableBody
                                        displayRowCheckbox={false}
                                        showRowHover={false}
                                        stripedRows={true}>
                                    { devices.notSupported.map( (device) => {
                                        let imageName = deviceImages[device.device.device.modelName];
                                        return (
                                            <TableRow key={ device.device.UDN }
                                                      selectable={false}>
                                                <TableRowColumn>
                                                    { imageName &&
                                                    <img width="40" height="40" src={ 'assets/img/' + imageName + '.png' } />
                                                    }
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    { device.device.device.friendlyName }
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    { device.device.device.modelName }
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    { device.device.device.modelNumber }
                                                </TableRowColumn>
                                            </TableRow>
                                        );
                                    })
                                    }
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </Tab>
                    }:w

