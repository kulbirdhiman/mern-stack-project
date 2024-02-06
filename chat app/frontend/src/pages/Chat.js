import MainNavbar from "../compontes/Navbar"
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './chat.css'
import axios from "axios"
import { useEffect, useState } from "react"
const Chat = () => {
    const [search, setSearch] = useState("")
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmRjMDkyNWY1MDBjZTViOGRmOWYyNCIsImlhdCI6MTcwNzAzNTEyMCwiZXhwIjoxNzA3MDM4NzIwfQ.WURX4jUSyt41RHvqs0NcKJxE1AdH77cIVC6z-srqhQQ}`,
        },
    }
    useEffect(() => {
        setSearch('t')
        const data = axios.get(`api/?search=${search}`, config
        ).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });

    })
    return (
        <>
            <MainNavbar />
            <div className="px-5  bg  h-100">
                <div className="chat-list  py-2">
                    <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span>
                    <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span> <span className="bg-white-50 d-flex p-2 chat-item mt-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" alt="img" className="profile-pic" />
                        <h2 className="mx-2" >karan</h2>
                    </span>
                </div>
                <div className="show-chat">
                    <div className="chat-item d-flex p-2" >
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA=" className="profile-pic ms-3 " alt="userimg" />
                        <h1>UserName</h1>
                    </div>
                    <div className="input">
                        <input type="text" className="" /> <button className="btns btn-info">send</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Chat