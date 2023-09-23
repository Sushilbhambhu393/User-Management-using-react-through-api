import React, { Component } from 'react';

export default class EditContacts extends Component {
    constructor(props) {
    super(props);
    const { id, name, framework, language } = props.contact; // Use an empty object as default
    this.state = {
        id: id || "",
        name: name || "",
        language: language || "",
        framework: framework || "",
    };
    console.log("hello",props.contact);
}


    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.id === "" || this.state.language === "" || this.state.framework === "") {
            alert("All the fields are mandatory");
            return;
        }
        this.props.updatecontacthandler(this.state); // Use the appropriate prop function for updating
        this.setState({ name: " ", id: " ", language: " ", framework: " " });
    };

    render() {
        return (
            <div className='ui main'>
                <h2>Update User</h2>
                <form className='ui form' onSubmit={this.update}>
                    <div className='field'>
                        <span htmlFor="name">Name</span>
                        <input id="name"
                            type="text"
                            name="name"
                            autoComplete="on"
                            placeholder='Name'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className='field'>
                        <span htmlFor="id">Id </span>
                        <input id="idd"
                            type="text"
                            name="id"
                            placeholder='Id'
                            value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value })}
                        //    readOnly // To prevent editing the ID
                        />
                    </div>
                    <div className='field'>
                        <span htmlFor="language">Language</span>
                        <input id="lan"
                            type="text"
                            name="language"
                            placeholder='Language'
                            value={this.state.language}
                            onChange={(e) => this.setState({ language: e.target.value })}
                        />
                    </div>
                    <div className='field'>
                        <span htmlFor="framework">Framework</span>
                        <input id="frame"
                            type="text"
                            name="framework"
                            placeholder='Framework'
                            value={this.state.framework}
                            onChange={(e) => this.setState({ framework: e.target.value })}
                        />
                    </div>

                    <button className='ui button blue'>Update</button><br /><br />
                </form>
            </div>
        );
    }
}
