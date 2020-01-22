import React from 'react';
const matrix = [[false, false, false],[false, false, false],[false, false, false]]
function tic (box, turn){
    let x = Number(box[0])
    let y = Number(box[2])
    matrix[x][y] = turn
}
class App extends React.Component {
    constructor(props){
        super(props)
        this.clickhandler = this.clickhandler.bind(this)
        this.state = {
            turn: true,
            winner: ''
        }
    }
    clickhandler(e){
        console.log(this.state.winner.length)
        let element = e.target
        if(element.innerHTML === ''){
            if(this.state.turn){
                tic(element.id, 'X')
                element.innerHTML = 'X'
                this.setState({
                    turn: false
                }, () => {
                    if(matrix[0][0] === 'X' && matrix[0][1] === "X" && matrix[0][2] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[1][0] === 'X' && matrix[1][1] === "X" && matrix[1][2] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[2][0] === 'X' && matrix[2][1] === "X" && matrix[2][2] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][0] === 'X' && matrix[1][0] === "X" && matrix[2][0] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][1] === 'X' && matrix[1][1] === "X" && matrix[2][1] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][2] === 'X' && matrix[1][2] === "X" && matrix[2][2] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][0] === 'X' && matrix[1][1] === "X" && matrix[2][2] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[2][0] === 'X' && matrix[1][1] === "X" && matrix[0][2] === "X"){
                        this.setState({
                            winner: 'X'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    }
                })
            } else{
                tic(element.id, 'O')
                element.innerHTML = 'O'
                this.setState({
                    turn: true
                }, () => {
                    if(matrix[0][0] === 'O' && matrix[0][1] === "O" && matrix[0][2] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[1][0] === 'O' && matrix[1][1] === "O" && matrix[1][2] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[2][0] === 'O' && matrix[2][1] === "O" && matrix[2][2] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][0] === 'O' && matrix[1][0] === "O" && matrix[2][0] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][1] === 'O' && matrix[1][1] === "O" && matrix[2][1] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][2] === 'O' && matrix[1][2] === "O" && matrix[2][2] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[0][0] === 'O' && matrix[1][1] === "O" && matrix[2][2] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    } else if (matrix[2][0] === 'O' && matrix[1][1] === "O" && matrix[0][2] === "O"){
                        this.setState({
                            winner: 'O'
                        }, () => {
                            alert(`Winner is ${this.state.winner}!`)
                        })
                    }
                })
            }
        } else {
            alert('This square is taken')
        }
    }
    render(){
        return(
        <div class="grid-container">
            <div class="grid-item" id='0 0'onClick ={this.clickhandler}></div>
            <div class="grid-item" id='0 1'onClick ={this.clickhandler}></div>
            <div class="grid-item" id='0 2'onClick ={this.clickhandler}></div>  
            <div class="grid-item" id='1 0'onClick ={this.clickhandler}></div>
            <div class="grid-item" id='1 1'onClick ={this.clickhandler}></div>
            <div class="grid-item" id='1 2'onClick ={this.clickhandler}></div>  
            <div class="grid-item" id='2 0'onClick ={this.clickhandler}></div>
            <div class="grid-item" id='2 1'onClick ={this.clickhandler}></div>
            <div class="grid-item" id='2 2'onClick ={this.clickhandler}></div>  
        </div>
        )
    }
}

export default App;