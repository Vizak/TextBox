const setText = ({ data: input }) => ({
	input,
});

const getText = ({ state }) => ({
	text: state.input,
});
const actions = {
	getText,
	setText,
};

export default actions;
