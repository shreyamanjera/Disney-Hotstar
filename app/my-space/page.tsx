"use client";
import {useState} from "react";
import Rail from "../components/Rail";
import Footer from "../components/Footer";
export default function MySpacePage(){
 const [loginOpen,setLoginOpen]=useState(false);
 return <main className="app-shell my-space-shell"><Rail active="My Space"/><section className="content my-space-content"><div className="my-space-main"><div className="my-space-stars" aria-hidden="true"/><a className="my-space-help" href="https://help.hotstar.com/"><span aria-hidden="true">?</span> Help &amp; Support</a><div className="my-space-prompt"><div className="device-illustration" aria-hidden="true"><div className="device-monitor"><i/></div><div className="device-left"/><div className="device-right"/><div className="device-orbit"/><span className="device-spark spark-one">✦</span><span className="device-spark spark-two">✦</span><span className="device-spark spark-three">✦</span></div><h1>Login to JioHotstar</h1><p>Start watching from where you left off, personalise for kids and more</p><button className="my-space-login" onClick={()=>setLoginOpen(true)}>Log In</button></div></div><Footer/>
 {loginOpen&&<div className="login-dialog-backdrop" onClick={()=>setLoginOpen(false)}><div className="login-dialog" role="dialog" aria-modal="true" aria-labelledby="login-dialog-title" onClick={event=>event.stopPropagation()}><button className="login-dialog-close" aria-label="Close" onClick={()=>setLoginOpen(false)}>×</button><h2 id="login-dialog-title">Log In</h2><p>Login is not available in this preview.</p><a href="https://www.hotstar.com/in/">Visit JioHotstar</a></div></div>}
 </section></main>
}
