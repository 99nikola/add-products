export const fileToDataURL = (file: any) => {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload =  (event) => {
        resolve(reader.result);
      }
      reader.readAsDataURL(file)
    })
  }  