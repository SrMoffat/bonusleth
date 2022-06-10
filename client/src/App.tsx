import './App.css';

function App() {
  return (
    <div className="App" style={{ border: '1px solid red' }}>
      <div style={{ height: '25vh', display: 'flex', flexDirection: 'row', justifyItems: 'space-between', margin: 10 }}>
        <div style={{ width: '100%' }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: "column", justifyItems: "center" }}>
            <div>You have 20 stacos</div>
            <div style={{ padding: 10, width: '50%', marginLeft: '220px', marginTop: '20px', boxShadow: '-3px 7px 15px -7px rgba(0,0,0,0.75)', borderRadius: '6px', marginBottom: '10px' }}>
              <div style={{ padding: '10px', display: 'flex' }}>
                <button style={{ marginRight: '5px' }}>Amount</button>
                <button style={{ marginRight: '5px' }}>Recipient</button>
                <button style={{ marginRight: '5px' }}>Hashtag</button>
              </div>
              <div>
                <textarea style={{ width: '100%', margin: '10px 0px', border: 'none' }} placeholder="+1 ETH for the Ninjas"></textarea>
              </div>
              <div style={{ borderTop: '1px solid gray', padding: '10px' }}>
                <button style={{ float: 'right' }}>Give</button>
              </div>
              <div style={{ border: '1px solid red' }}>Hapa</div>
            </div>
          </div>
        </div>
        <div style={{ width: '50%', marginLeft: 5, marginTop: '40px' }}>
          <div style={{ boxShadow: '-3px 7px 15px -7px rgba(0,0,0,0.75)', padding: '20px', borderRadius: '6px' }}>
            <div>You have <span style={{ fontWeight: 'bold' }}>29 Stacos</span> to redeem</div>
            <button style={{ margin: '10px', padding: '5px', width: '100%' }}>Button</button>
            <div>Gift</div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'gray', height: '50vh' }}>Gray</div>
    </div>
  );
}

export default App;
