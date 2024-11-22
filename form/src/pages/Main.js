import Second from "./Second"
import { Component } from "react"
import './main.css'
import myImage from "./logo.png";

export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                ism: '',
                password: '',
                email: ''
            }
        }
    }


    handlechange = (e) => {
        const { name, value } = e.target

        console.log("name ", name, " value ", value)
        this.setState((prev) => ({
            ...prev,
            user: {
                ...prev.user,
                [name]: value
            }
        }))

    }

    handleClick = (e) => {
        alert("Button clicked");
    };

    render() {
        return (
            <>
                <div className="container">
                    <img className="logo" src={myImage} alt="Description of image" />
                    <h3 className="title">Connect Tradier to GitHub</h3>

                    <form className="main">
                        <label className="input-name">Name:</label> <br />
                        <input className="input-box"
                            name='ism'
                            placeholder='enter your name'
                            onChange={this.handlechange}
                        /> <br />

                        <label className="input-name">Password:</label> <br />
                        <input className="input-box"
                            name='password'
                            placeholder='enter your password'
                            onChange={this.handlechange}
                        /> <br />

                        <label className="input-name">Email:</label> <br />
                        <input className="input-box"
                            name='email'
                            placeholder='enter your email'
                            onChange={this.handlechange}
                        />
                        <br />


                        <button className="btn" onClick={this.handleClick}>Submit</button>
                        <div className="after-submit">
                            <h3></h3>
                            <h3>Name : {this.state.user.ism}</h3>
                            <h3>Password : {this.state.user.password}</h3>
                            <h3>Email : {this.state.user.email}</h3>
                        </div>
                    </form>

                </div>
            </>
        )
    }
}

export { Main }