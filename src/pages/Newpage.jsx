import testnew from './../services/newpage'; 
function showmsg(){
  testnew();
}
export default () => {
    return <div>
      <h2>New Page</h2>
      <button type="button" name="but" value="test" onClick={showmsg} >test</button>
      
    </div>;
};