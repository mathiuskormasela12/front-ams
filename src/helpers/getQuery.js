// ========== getQuery

const getQuery = (search, queryName) => {
	const url = new URLSearchParams(search)

	return url.get(queryName);
}

export default getQuery;