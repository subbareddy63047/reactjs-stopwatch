import {Component} from "react"

import "./index.css"

class Timer extends Component{
	state={mins:"00",secs:"00",count:0,minCount:1}
	timerId=null
	seconds=()=>{
		const {count}=this.state
		if(count<=9){
			return "0"+count
		}else{
			return count
		}
	}

	minutes=(prevState)=>{
		const {minCount}=prevState
		if(minCount<=9){
			return "0"+minCount
		}else{
			return minCount
		}
	}

	startTime=()=>{
		this.timerId=setInterval(()=>{
			const {count}=this.state
			if(count<60){
				this.setState(prevState=>({...prevState,count:prevState.count+1,secs:this.seconds()}))
			}
			else{
				this.setState(prevState=>({secs:'00',minCount:prevState.minCount+1,mins:this.minutes(prevState),count:0}))
			}

		},1000)
	}
	stopTimer=()=>{
		clearInterval(this.timerId)
	}

	resetTimer=()=>{
		clearInterval(this.timerId)
		this.setState({mins:"00",secs:"00",count:0,minCount:1})
	}


	render(){
			const {mins,secs}=this.state
			return (<div className="main-container">
				<div className="inner-container">
					<h1 className="inner-container__heading">Stopwatch</h1>
					<div className="timer-container">
						<div className="timer-container__heading">
							<img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
							<p className="text">Timer</p>
						</div>
						<p className="timer">{mins}:{secs}</p>
					</div>
					<div className="buttons-container">
						<button type="button" className="start" onClick={this.startTime}>Start</button>
						<button type="button" className="stop" onClick={this.stopTimer}>Stop</button>
						<button type="button" className="reset" onClick={this.resetTimer}>Reset</button>
					</div>
				</div>
				</div>)
	}

}
export default Timer