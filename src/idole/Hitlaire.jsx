import "../Graf/Graf.css";

export default function Hitlaire() {
    return (
        <div>
            

            <div className="cards-container">
                <ul className="cards" style={{ "--items": 26 }}>
                    <li style={{ "--i": 0 }}>
                        <input type="radio" id="item-0" name="gallery-item" defaultChecked />
                        <label htmlFor="item-0">2000</label>
                        <h2>2000</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li style={{ "--i": 1 }}>
                        <input type="radio" id="item-1" name="gallery-item" />
                        <label htmlFor="item-1">2001</label>
                        <h2>2001</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li style={{ "--i": 2 }}>
                        <input type="radio" id="item-2" name="gallery-item" />
                        <label htmlFor="item-2">2002</label>
                        <h2>2002</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li style={{ "--i": 3 }}>
                        <input type="radio" id="item-3" name="gallery-item" />
                        <label htmlFor="item-3">2003</label>
                        <h2>2003</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
