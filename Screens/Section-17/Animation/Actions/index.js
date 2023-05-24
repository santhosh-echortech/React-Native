export const SelectLibrary = (libraryId) => {
    return {
        type: 'selectLibrary',
        payload: libraryId
    }
}