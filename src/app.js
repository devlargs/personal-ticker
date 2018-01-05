import React, { Component } from 'react';

import Header from './templates/header';
import Sidebar from './templates/sidebar';
import Footer from './templates/sidebar';

//page
import Main from './pages/main'
import Trades from './pages/trades';

let Content;

switch(page){
    case 'trade' : (Content = Trades); break; 
    case 'index': (Content = Main); break;
        default: break;
}

console.log(page)

class App extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <Header />
                    <Sidebar />

                    <Content/>

                    <Footer />
                    <div class="control-sidebar-bg"></div>
                </div>
            </div>
        )
    }
}

export default App;