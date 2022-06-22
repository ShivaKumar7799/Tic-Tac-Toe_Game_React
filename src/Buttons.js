

function Buttons(props){
   return(
       <>
        <div class="row">
        <input  className="button"  type="button"  onClick={props.click}   />
        <input className="button" type="button" onClick={"button_click1(1)"}  />
        <input className="button" type="button" onClick={"button_click1(2)"}  />
    </div>
    <div className="row">
        <input  className="button" type="button" onClick={"button_click1(3)"}  />
        <input  className="button" type="button" onClick={"button_click1(4)"}  />
        <input className="button" type="button" onClick={"button_click1(5)"}  />
    </div>
    <div className="row">
        <input  className="button" type="button" onClick={"button_click1(6)"}  />
        <input  className="button" type="button" onClick={"button_click1(7)"}  />
        <input  className="button" type="button" onClick={"button_click1(8)"}  />
    </div></>
   )
}
export default Buttons