const Counter = ({current, onBump}) => (
    <div style={{ display: 'flex', justifyContent: 'middle', }}>
        <h2>Current Number: <strong>{current}</strong></h2>
        <button style={{ alignSelf: "center", margin: '0px 10px'}} onClick={onBump}>++</button>
    </div>
);

export default Counter;