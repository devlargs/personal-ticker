import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside class="main-sidebar">
                <section class="sidebar">
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="http://www.wilwia.com/images/default-user.png" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Ralph Largo</p>
                            <a href="#">
                                <i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>

                    <ul class="sidebar-menu" data-widget="tree">
                        <li class="header">MAIN NAVIGATION</li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-dashboard"></i>
                                <span>Dashboard</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                        </li>

                    </ul>
                </section>
            </aside>
        )
    }
}

export default Sidebar;