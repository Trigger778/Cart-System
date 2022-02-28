import { buildQueries } from "@testing-library/react";
import React from "react";

const Navbar = (props) =>{  //make it a function instead class as not use setstate
    return (
         <div style={styles.text} >
            <h1 style={styles.carticon}> Mudit Cart </h1>
            <div style={styles.nav} >
            <div style={styles.carticoncontainer}>
                <img style={styles.carticon} src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="carticon"/>
                <span style={styles.cartcount}> {props.count} </span>
            </div>
        </div>
        </div>
    );
}

const styles={
    carticon:{
        height:32,
        marginRight:20
    },
    text:{
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        backgroundColor: 'yellow',
    },
    nav:{
        height:70,
        background:'blue',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',

    },
    carticoncontainer:{
        position:'relative'
    },
    cartcount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }

}

export default Navbar;