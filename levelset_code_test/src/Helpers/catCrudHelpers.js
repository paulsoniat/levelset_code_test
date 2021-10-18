const editCat = (catId, callback, callbackId) => {
    const catData = JSON.parse(localStorage.mockData);
    callback(!callbackId)
}

const deleteCat = (catId) => {
    const catData = JSON.parse(localStorage.mockData);
}

export {deleteCat, editCat}