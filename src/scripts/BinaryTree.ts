import Node from '@/scripts/node';
export default class BinaryTree {
	root: any;
	constructor() {
		this.root = null;
	}
	insertBasic(node: Node) {
		if (this.root == null) {
			this.root = node;
		} else {
			this.search(this.root, node);
		}
	}
	search(existingNode: Node, newNode: Node) {
		if (newNode.value < existingNode.value) {
			if (existingNode.nodeLeft == null) {
				existingNode.nodeLeft = newNode;
			} else {
				this.search(existingNode.nodeLeft, newNode);
			}
		} else {
			if (existingNode.nodeRight == null) {
				existingNode.nodeRight = newNode;
			} else {
				this.search(existingNode.nodeRight, newNode);
			}
		}
	}
	/*
      Visita  primeiramente a root, depois left e depois right
    */
	preorder(node: Node, level: number = 0): string[] {
		if (this.root !== null) {
			let str = [ ' '.repeat(level) + node.value ];

			if (node.nodeLeft != undefined) {
				str.push(...this.preorder(node.nodeLeft, level + 1));
			}
			if (node.nodeRight != undefined) {
				str.push(...this.preorder(node.nodeRight, level + 1));
			}
			console.log(str);
			return str;
		}
		return [];
	}

	bfs(node: Node, level: number = 0): string[] {
		const queue: (Node | null)[] = [ node, null ];

		let lines: string[] = [];
		let currentLine = '';

		while (queue.length > 0) {
			// Removes the head (first element of the array)
			const cursor = queue.shift();
			console.log(cursor);

			if (cursor == null) {
				lines.push(currentLine);

				currentLine = '';

				if (queue.length > 0) {
					queue.push(null);
				}
			} else {
				currentLine += cursor.value + ' ';

				if (cursor.nodeLeft != undefined) {
					queue.push(cursor.nodeLeft);
				}
				if (cursor.nodeRight != undefined) {
					queue.push(cursor.nodeRight);
				}
			}
		}

		if (currentLine) {
			lines.push(currentLine);
		}

		return lines;
	}
}
