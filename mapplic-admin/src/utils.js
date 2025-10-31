export const roundTo = (number, decimals) => {
	const mult = Math.pow(10, decimals);
	return Math.round(number * mult) / mult;
}

export const fileExtension = (url) => {
	return url.split(/[#?]/)[0].split('.').pop().trim().toLowerCase();
}

export const getUniqueDynamicID = (list, idToDuplicate, keyAttribute = 'id') => {
	let newId = idToDuplicate;

	while (list.some(item => item[keyAttribute] === newId)) {
		const match = newId.match(/(.*?)([1-9]\d*)$/);
		newId = match ? match[1] + (parseInt(match[2]) + 1) : newId + '2';
	}

	return newId;
};