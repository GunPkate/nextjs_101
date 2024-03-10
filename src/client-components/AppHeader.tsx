'use client'

export default function AppHeader() {
    const showMsg = () => {
        alert("MSG");
    }
    
    return (
        <div>
            <h1 className="header">AppHeader</h1>
            <button onClick={() => showMsg()}>1234</button>
        </div>
    )
}