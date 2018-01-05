import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header class="main-header">
                <a href="../../index2.html" class="logo">
                    <span class="logo-mini">
                        <b>B</b>NC</span>
                    <span class="logo-lg">
                        <b>Bi</b>nance</span>
                </a>
                <nav class="navbar navbar-static-top">
                    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>

                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">

                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="http://www.wilwia.com/images/default-user.png" class="user-image" alt="User Image" />
                                    <span class="hidden-xs">Ralph Largo</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="http://www.wilwia.com/images/default-user.png" class="img-circle" alt="User Image" />
                                        <p>
                                            Ralph Largo (Web Developer)
                                            <small>Cryptocurrency Investor since Nov 2017</small>
                                        </p>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;