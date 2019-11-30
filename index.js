function takeANumber(arr, name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr){
  return arr.length === 0 ? 'Line is empty.' : 'Line is not empty.'
}
