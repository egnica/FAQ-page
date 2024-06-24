import {useState} from "react";
import List from "./list.json";

import "./App.css";

function App() {
	const [selectedIndex, setIndex] = useState(null);

	const clickHandler = (index) => {
		setIndex(index);
	};

	return (
		<>
			{List.faq.map((item, index) => {
				return (
					<div key={item.key}>
						<div onClick={() => clickHandler(index)}>{item.question}</div>
						{selectedIndex == item.key && <div>{item.answer}</div>}
					</div>
				);
			})}
		</>
	);
}

export default App;
