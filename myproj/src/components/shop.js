/*import { Component } from "react";
import {connect} from 'react-redux'
import {buy_laptop} from '../redux/actions'
class Shop extends Component{
    state={numOfLap:1}

    setValue=(event)=>{
        this.setState({numOfLap:event.target.value})
    }
    render(){
        const {numOfLap}=this.state
        
        return(
            <div>
                    <h1>Welcome To Shop</h1>
                    <p>Dell Inspiron Laptop</p>
                    <p>Availble: {this.props.numOfLaptops}</p>
                    <input value={numOfLap} onChange={this.setValue}/>
                    <button type='button' onClick={()=>this.props.buyLaptop(numOfLap)}>Buy {numOfLap}</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        numOfLaptops:state.laptop.numOfLaptops
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyLaptop: (numOfLap)=>dispatch(buy_laptop(numOfLap))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)*/