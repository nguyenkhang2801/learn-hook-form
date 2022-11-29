interface infoData {
	name: string;
	age: string;
}

interface userData {
	firstName: string;
	lastName: number;
}

declare function useFetch(url: string, type: 'info'): [infoData];
declare function useFetch(url: string, type: 'user'): [userData];

export default useFetch;
