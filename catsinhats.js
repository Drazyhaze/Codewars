const height = n => {
	let catHeight = 2e6;
	for (let i = 1; i <= n; i++) {
		catHeight += 2e6 * Math.pow(1/2.5, i);
	}
	return catHeight.toFixed(3)
}