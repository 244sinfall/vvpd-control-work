export const validateNumber = (str: string) => {
    let newValue: null | "-" | number = str === "-" ? str : parseInt(str)
    if(newValue !== "-" && isNaN(newValue)) newValue = null
    return newValue
}