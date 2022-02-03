class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hi MAchine</h1>
                <Machine 
                s1= "x"
                s2= "x"
                s3= "x"
                 />
                <Machine
                s1= "z"
                s2= "z"
                s3= "s"
                 />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))