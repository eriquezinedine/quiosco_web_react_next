import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./empty.json";

const Empty = () => <div style={{width: '350px', height: '350px', margin: 'auto'}} ><Lottie animationData={groovyWalkAnimation} loop={true} /></div>;

export default Empty;