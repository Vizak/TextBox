import { React } from 'react';
const TextBox = ({ state, actions }) =>
	<div>
		<label>
			<input
				type="text"
				value={ state.value }
				onChange={ (evt) =>
					actions.setText(evt.target.value) }
			/>
		</label>
		<button
			onClick={ () => actions.getText() }
		>
			save!
		</button>
	</div>;

export default TextBox;
