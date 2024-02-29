export const YOUTUBE_API_KEY = 'AIzaSyDCcfFA-rsg2hQC6sdD_wMEN7D3oejAWbY'


export const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + 'M'
  }
  else if (value >= 1000) {
    return Math.floor(value / 1000) + 'K'
  } else {
    return value
  }
}