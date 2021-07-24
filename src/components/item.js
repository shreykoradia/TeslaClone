import React from 'react'
import Button from './button'
import './item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Item = ({title , desc , backgroundImg ,leftBtnTxt ,leftBtnlink ,rightBtnTxt, rightBtnlink ,twoButtons ,first}) =>{
    return(
        <div className ="item" style = {{
            backgroundImage: `url(${backgroundImg})`
        }}>
                <div className = "item_container">
                    <div className="item_text">
                        <p>{title}</p>
                        <div className="item_text_desc">
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="item_lowerThird">
                        <div className="items_button">
                           <Button imp ="primary" text ={leftBtnTxt} link = {leftBtnlink}/>

                            { twoButtons && (
                                    <Button imp ="secondary" text={rightBtnTxt} link ={rightBtnlink}/>
                            )}
                        
                        </div>
                        {first && (
                            <div className = "items_expand">
                                <ExpandMoreIcon />
                            </div>
                        )}
                    </div>
                </div>

        </div>
   );
}


export default Item;