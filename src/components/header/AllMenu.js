import {menu, create} from "../../data/allMenu";

export default function AllMenu() {
    return (
        <div className="all_menu">
            <div className="all_menu_header">Menu</div>
            <div className="all_menu_wrap scrollbar">
                <div className="all_left">
                    <div className="all_menu_search">
                        <i className="amm_s_ic"></i>
                        <input type="text" placeholder="Search Menu"/>
                    </div>
                    <div className="all_menu_group">
                        <div className="all_menu_group_header">Social</div>
                        <div className="all_menu-item hover1">
                            <img src="../../left/campus.png" alt=""/>
                            <div className="all_menu_col">
                                <span>Campus</span>
                                <span>
                                    A unique, exclusive space for collage students on Facebook.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}