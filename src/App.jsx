import {useState} from "react";
import List from "./list.json";
import {Markup} from "interweave";

import "./App.css";

//https://interweave.dev/docs/

function App() {
	const [selectedIndex, setIndex] = useState(null);

	const clickHandler = (index) => {
		selectedIndex == index ? setIndex(null) : setIndex(index);
	};

	return (
		<>
			<div className='agenda-image-div'>
				<div style={{padding: "5%"}}>
					<h1 style={{marginTop: "60px"}}>FAQ&apos;s</h1>
				</div>
			</div>

			<div className='list-contain'>
				{List.faq.map((item, index) => {
					return (
						<>
							<div className='outline' key={item.key}>
								<div
									onClick={() => clickHandler(index)}
									className='item-contain'
								>
									<p> {item.question}</p>

									{selectedIndex === index ? (
										<img
											style={{margin: "auto"}}
											width='30'
											src='https://www.barlowresearch.com/BusinessBankingConference_2024/images//minus.svg'
										/>
									) : (
										<img
											width='50'
											style={{margin: "auto"}}
											src='https://www.barlowresearch.com/BusinessBankingConference_2024/images/plus.svg'
										/>
									)}
								</div>

								{selectedIndex === index && (
									<div className='fade_in'>
										<div>
											<Markup content={item.answer} />
										</div>
									</div>
								)}
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}

export default App;
