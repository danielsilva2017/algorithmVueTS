export default class Node {
	value: number;
	nodeRight?: Node | null;
	nodeLeft?: Node | null;
	level = 0;
	constructor(value: number, nodeRight = null, nodeLeft = null) {
		this.value = value;
		this.nodeRight = nodeRight;
		this.nodeLeft = nodeLeft;
	}
}
