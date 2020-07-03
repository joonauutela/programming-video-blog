import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import ApolloProvider from './ApolloProvider'

ReactDOM.render(ApolloProvider, document.getElementById('root'))

console.log('%c "Failed to exexute postMessage on DOMWindow..." is a known issue and shouldnt affect anything since the client tries to connect to the youtube-api multiple times. If you have an idea on how to solve the error message for ReactJs, you can msg me on github: github.com/joonauutela ', 'background: #222; color: #bada55; fontSize: 23')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
