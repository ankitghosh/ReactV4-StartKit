export const updateData = (data) => {
    return {
        type: 'DATA_UPDATED',
        payload: data
    }
};
export const newData = (data) => {
	return {
        type: 'NEW_DATA',
        payload: data
    }
}
export const loading = () =>{
	return{
		type: 'LOADING'
	}
}
export const similarData = (data) => {
    return {
        type: 'SIMILAR_DATA',
        payload: data
    }
}